import { useGLTF } from "@react-three/drei";

export const FaceModal = () => {
  const { nodes, materials } = useGLTF("/2.glb") as {
    nodes: any;
    materials: any;
  };
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere012.geometry}
        material={materials["05_Lidah I Template"]}
        position={[-0.001, -0.906, 0.578]}
        rotation={[0.424, 0, 0]}
        scale={[0.267, 0.159, 0.223]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["08_Mata I Template"]}
        position={[0.336, 0.056, 1.179]}
        rotation={[0, 0, -0.016]}
        scale={[0.108, 0.155, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.346, 0.492, 1.289]}
        rotation={[Math.PI / 2, 0, 0.064]}
        scale={1.803}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["04_Gigi I Template"]}
        position={[-0.001, -0.518, 0.887]}
        rotation={[0.236, 0, 0]}
        scale={[0.314, 0.113, 0.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["01_Kulit Putih I Template"]}
        position={[0.921, -0.195, 0.38]}
        rotation={[1.894, 0.288, -0.8]}
        scale={[0.134, 0.031, 0.108]}
      />
      <group
        position={[0.951, -0.151, 0.219]}
        rotation={[1.583, -0.004, -0.68]}
        scale={[0.361, 0.123, 0.361]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials["02_Kulit Gelap I Template"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials["01_Kulit Putih I Template"]}
        />
      </group>
      <group
        position={[-0.001, 0.078, 0.438]}
        rotation={[-0.015, 0, 0]}
        scale={[0.79, 0.725, 0.725]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["01_Kulit Putih I Template"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["03_Tenggorokan I Template"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["04_Kulit Putih I Template"]}
        position={[-0.001, -1.503, 0]}
        scale={0.461}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["01_Brewok"].geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.001, -0.484, 1.288]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path006.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.206, 1.35, 0.834]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["05_Rambut"].geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.001, 0.406, 0.352]}
        scale={1.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path001.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.224, 1.536, 0.768]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path002.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.224, 1.536, 0.768]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path003.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.249, 1.635, 0.555]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path004.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.762, 0.678, 0.356]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path005.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.762, 0.678, 0.356]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path007.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.779, 0.403, 0.288]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path008.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.206, 1.35, 0.834]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path009.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.824, 0.997, 0.335]}
        rotation={[-0.65, -0.377, -0.199]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path010.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.764, 0.941, 0.072]}
        rotation={[-1.028, -0.278, -0.241]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path011.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.766, 0.853, 0.068]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path012.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.206, 1.35, 0.834]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path013.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.249, 1.635, 0.555]}
        rotation={[-0.681, -0.394, -0.263]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path014.geometry}
        material={materials["06_Alis I Template"]}
        position={[-0.764, 0.941, 0.072]}
        rotation={[-1.028, -0.278, -0.241]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path015.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.762, 0.678, 0.356]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_Path016.geometry}
        material={materials["06_Alis I Template"]}
        position={[0.766, 0.853, 0.068]}
        rotation={[0.135, 0.375, -0.636]}
        scale={0.984}
      />
      <group position={[-0.001, -1.503, 0]} scale={0.461}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials["01_Clothes I Template"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials["02_Clothes I Template"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials["03_Clothes I Template"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["04_Clothes I Template"]}
        position={[0, -0.896, 0.238]}
        rotation={[0.118, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/2.glb");
