import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import type { Group } from 'three'

function ScreenCodeLines() {
  const lines = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        x: -0.5 + Math.random() * 0.3,
        y: 0.4 - i * 0.15,
        width: 0.5 + Math.random(),
        color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
      })),
    []
  )

  return (
    <>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.x, line.y, 0.03]}>
          <planeGeometry args={[line.width, 0.04]} />
          <meshBasicMaterial color={line.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  )
}

export function FloatingLaptop() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
        {/* Laptop base */}
        <mesh position={[0, -0.15, 0.1]} castShadow>
          <boxGeometry args={[2.4, 0.08, 1.6]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Keyboard area */}
        <mesh position={[0, -0.1, 0.1]}>
          <boxGeometry args={[2.2, 0.02, 1.4]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.5} roughness={0.4} />
        </mesh>

        {/* Screen hinge */}
        <mesh position={[0, 0.05, -0.7]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[2.4, 0.04, 0.08]} />
          <meshStandardMaterial color="#2a2a3e" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Screen */}
        <group position={[0, 0.7, -0.65]} rotation={[-0.3, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[2.4, 1.5, 0.04]} />
            <meshStandardMaterial color="#111122" metalness={0.7} roughness={0.2} />
          </mesh>

          {/* Screen display */}
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[2.2, 1.3]} />
            <meshStandardMaterial
              color="#0a1628"
              emissive="#3b82f6"
              emissiveIntensity={0.3}
              metalness={0.1}
              roughness={0.1}
            />
          </mesh>

          <ScreenCodeLines />
        </group>

        {/* Trackpad */}
        <mesh position={[0, -0.08, 0.45]}>
          <boxGeometry args={[0.6, 0.01, 0.4]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

export function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { type: 'cube' as const, position: [-3, 1.5, -2] as [number, number, number], scale: 0.4, color: '#3b82f6', speed: 1.2 },
      { type: 'cube' as const, position: [3.5, -0.5, -1] as [number, number, number], scale: 0.3, color: '#8b5cf6', speed: 0.8 },
      { type: 'sphere' as const, position: [-2.5, -1, 1] as [number, number, number], scale: 0.35, color: '#06b6d4', speed: 1.5 },
      { type: 'sphere' as const, position: [2.8, 2, 0.5] as [number, number, number], scale: 0.25, color: '#8b5cf6', speed: 1.0 },
      { type: 'cube' as const, position: [1.5, -1.5, -3] as [number, number, number], scale: 0.2, color: '#3b82f6', speed: 1.8 },
      { type: 'sphere' as const, position: [-3.5, 0, -3] as [number, number, number], scale: 0.3, color: '#06b6d4', speed: 0.6 },
    ],
    []
  )

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={shape.speed} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.type === 'cube' ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : (
              <icosahedronGeometry args={[1, 1]} />
            )}
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.5}
              chromaticAberration={0.1}
              anisotropy={0.3}
              distortion={0.2}
              distortionScale={0.2}
              temporalDistortion={0.1}
              color={shape.color}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}
