import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPosition: THREE.Vector3;
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const initScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles
    const particleCount = isMobile ? 40 : 90;
    const spread = isMobile ? 35 : 55;
    const particles: Particle[] = [];

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spread * 2;
      const y = (Math.random() - 0.5) * spread * 1.2;
      const z = (Math.random() - 0.5) * 30;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Warm amber tones mixed with cool whites
      const isAccent = Math.random() > 0.7;
      if (isAccent) {
        colors[i * 3] = 0.96;     // R
        colors[i * 3 + 1] = 0.62; // G
        colors[i * 3 + 2] = 0.04; // B
      } else {
        const brightness = 0.3 + Math.random() * 0.4;
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness;
        colors[i * 3 + 2] = brightness + 0.05;
      }

      particles.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.005
        ),
        originalPosition: new THREE.Vector3(x, y, z),
      });
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 2.5 : 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // Lines between close particles
    const lineGeometry = new THREE.BufferGeometry();
    const maxLines = particleCount * particleCount;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    const connectionDistance = isMobile ? 14 : 16;

    // Animation
    const animate = () => {
      if (reducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const posAttr = pointsGeometry.getAttribute('position') as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.position.add(p.velocity);

        // Mouse repulsion (mapped to world coords)
        if (!isMobile) {
          const mx = (mouseRef.current.x / width - 0.5) * spread * 2;
          const my = -(mouseRef.current.y / height - 0.5) * spread * 1.2;
          const dx = p.position.x - mx;
          const dy = p.position.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 15) {
            const force = (15 - dist) / 15 * 0.08;
            p.position.x += dx * force * 0.1;
            p.position.y += dy * force * 0.1;
          }
        }

        // Return to original position gently
        p.position.x += (p.originalPosition.x - p.position.x) * 0.002;
        p.position.y += (p.originalPosition.y - p.position.y) * 0.002;

        // Bounds
        if (Math.abs(p.position.x) > spread * 1.2) p.velocity.x *= -1;
        if (Math.abs(p.position.y) > spread * 0.8) p.velocity.y *= -1;

        posAttr.setXYZ(i, p.position.x, p.position.y, p.position.z);
      }
      posAttr.needsUpdate = true;

      // Update lines
      let lineIdx = 0;
      const linePosAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute;
      const lineColAttr = lineGeometry.getAttribute('color') as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const d = particles[i].position.distanceTo(particles[j].position);
          if (d < connectionDistance) {
            const alpha = 1 - d / connectionDistance;
            const c = 0.3 + alpha * 0.3;

            linePosAttr.setXYZ(lineIdx * 2, particles[i].position.x, particles[i].position.y, particles[i].position.z);
            linePosAttr.setXYZ(lineIdx * 2 + 1, particles[j].position.x, particles[j].position.y, particles[j].position.z);
            lineColAttr.setXYZ(lineIdx * 2, c, c * 0.8, c * 0.3);
            lineColAttr.setXYZ(lineIdx * 2 + 1, c, c * 0.8, c * 0.3);
            lineIdx++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIdx * 2);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Mouse handler
    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    if (!isMobile) {
      container.addEventListener('mousemove', handleMouse);
    }

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      if (!isMobile) container.removeEventListener('mousemove', handleMouse);
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile, reducedMotion]);

  useEffect(() => {
    const cleanup = initScene();
    return cleanup;
  }, [initScene]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Abstract particle network representing interconnected systems"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
