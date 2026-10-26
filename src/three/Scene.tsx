import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { FloatingLaptop, FloatingShapes } from './FloatingLaptop'
import { Particles } from './Particles'
import type { Group } from 'three'

function CameraRig() {
  const group = useRef<Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.3 - group.current.rotation.y) * 0.02
      group.current.rotation.x += (-pointer.y * 0.15 - group.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={group}>
      <FloatingLaptop />
      <FloatingShapes />
    </group>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[0, 2, 2]} intensity={0.5} color="#06b6d4" />

      <CameraRig />
      <Particles count={1500} />
      <hemisphereLight args={['#3b82f6', '#050505', 0.4]} />
      <Stars radius={50} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

interface HeroSceneProps {
  className?: string
}

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
