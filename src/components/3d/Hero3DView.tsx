import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HandModel } from './HandModel'

export function Hero3DView() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none md:pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        {/* Strong directional light for sharp contrast */}
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        {/* Subtle fill light */}
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <HandModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
