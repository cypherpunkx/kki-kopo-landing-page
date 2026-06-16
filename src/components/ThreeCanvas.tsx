'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Komponen Partikel Sakura Dinamis
function SakuraParticles({ count = 150 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Inisialisasi THREE.Timer baru untuk menggantikan THREE.Clock yang didepresiasi
  const timer = useMemo(() => {
    const t = new THREE.Timer();
    if (typeof document !== 'undefined') t.connect(document);
    return t;
  }, []);
  
  // Buat koordinat acak untuk partikel sakura
  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rand = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Menyebar partikel di area tertentu
      pos[i * 3] = (Math.random() - 0.5) * 12; // X
      pos[i * 3 + 1] = Math.random() * 8 - 4;   // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8; // Z
      
      // Kecepatan dan rotasi acak
      rand[i * 3] = Math.random() * 0.02 + 0.005; // speed y (kecepatan jatuh)
      rand[i * 3 + 1] = Math.random() * 0.01;      // speed x (goyangan samping)
      rand[i * 3 + 2] = Math.random() * 0.02;      // speed z
    }
    return [pos, rand];
  }, [count]);

  const mouseRef = useRef({ x: 0, y: 0 });

  // Tangkap gerakan mouse di window
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    timer.update();
    const elapsedTime = timer.getElapsed();
    
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    
    for (let i = 0; i < count; i++) {
      const idxY = i * 3 + 1;
      const idxX = i * 3;
      const idxZ = i * 3 + 2;

      // Partikel jatuh ke bawah
      posAttr.array[idxY] -= randoms[idxY] * (delta * 60);
      
      // Goyangan samping (seperti tertiup angin) + pengaruh gerakan mouse
      posAttr.array[idxX] += (Math.sin(elapsedTime + i) * randoms[idxX] + mouseRef.current.x * 0.02) * (delta * 60);
      posAttr.array[idxZ] += Math.cos(elapsedTime + i) * randoms[idxZ] * (delta * 60);

      // Jika partikel keluar batas bawah, reset ke atas dengan koordinat acak baru
      if (posAttr.array[idxY] < -5) {
        posAttr.array[idxY] = 5;
        posAttr.array[idxX] = (Math.random() - 0.5) * 12;
        posAttr.array[idxZ] = (Math.random() - 0.5) * 8;
      }
    }
    
    posAttr.needsUpdate = true;
    
    // Rotasi pelan seluruh sistem partikel
    pointsRef.current.rotation.y += 0.002 * (delta * 60);
    pointsRef.current.rotation.x = mouseRef.current.y * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#E11D48" // Merah KKI / Sakura
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        blending={THREE.NormalBlending}
      />
    </Points>
  );
}

// Bunga Sakura 3D Utama yang Berputar di Tengah
function FloatingSakuraBadge() {
  const meshRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Inisialisasi THREE.Timer baru untuk menggantikan THREE.Clock yang didepresiasi
  const timer = useMemo(() => {
    const t = new THREE.Timer();
    if (typeof document !== 'undefined') t.connect(document);
    return t;
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    timer.update();
    const elapsedTime = timer.getElapsed();
    
    // Animasi mengambang (floating)
    meshRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
    
    // Rotasi konstan
    meshRef.current.rotation.y += 0.005 * (delta * 60);
    
    // Interaksi mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseRef.current.y * 0.3, 0.05);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -mouseRef.current.x * 0.3, 0.05);
  });

  // Membuat bentuk kelopak sakura 3D menggunakan gabungan mesh
  return (
    <group ref={meshRef} scale={[1.8, 1.8, 1.8]}>
      {/* 5 Kelopak Sakura */}
      {[0, 72, 144, 216, 288].map((angle, index) => (
        <group key={index} rotation={[0, 0, THREE.MathUtils.degToRad(angle)]}>
          <mesh position={[0, 0.4, 0]}>
            <coneGeometry args={[0.25, 0.7, 4, 1, false]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              roughness={0.2} 
              metalness={0.1}
            />
          </mesh>
        </group>
      ))}

      {/* Ring Hitam Tengah */}
      <mesh position={[0, 0, 0.05]}>
        <torusGeometry args={[0.38, 0.04, 16, 100]} />
        <meshStandardMaterial color="#0F0F11" roughness={0.3} />
      </mesh>

      {/* Pusat Merah Putih */}
      <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.04, 32]} />
        <meshStandardMaterial color="#E11D48" roughness={0.4} />
      </mesh>
      
      {/* Detail Bendera (Putih di bawah) */}
      <mesh position={[0, -0.16, 0.05]}>
        <boxGeometry args={[0.5, 0.3, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none bg-radial from-white via-neutral-50 to-neutral-100/50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 3, 4]} intensity={2.0} castShadow />
        <pointLight position={[-3, -3, 2]} intensity={0.5} />
        
        {/* Kumpulan Kelopak Jatuh */}
        <SakuraParticles count={120} />
        
        {/* Emblem Sakura KKI 3D */}
        <FloatingSakuraBadge />
      </Canvas>
    </div>
  );
}
