import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

interface ModalViewerProps {
  children?: React.ReactNode;
}

export const ModalViewer = ({ children }: ModalViewerProps) => {
  const ref = useRef<any | null>(null);
  return (
    <Canvas orthographic camera={{ fov: 50 }}>
      <Suspense fallback={"loading..."}>
        <Stage preset='rembrandt' intensity={1} environment='city'>
          {children}
        </Stage>
        <OrbitControls
          ref={ref}
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
          enableRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};
