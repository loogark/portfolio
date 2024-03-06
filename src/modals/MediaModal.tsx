import { useGLTF } from "@react-three/drei";
export const MediaModal = () => {
  const { nodes, materials } = useGLTF("/mind.glb") as any;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Material.105"]}
        position={[0.936, 1.405, 0.884]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Material.106"]}
        position={[0.937, 0.429, 0.884]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials["Material.101"]}
        position={[-1.244, 0.213, 0.491]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials["Material.102"]}
        position={[-0.543, -0.335, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={materials["Material.105"]}
        position={[1.338, 0.925, 0.784]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials["Material.106"]}
        position={[0.538, 0.917, 0.784]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={materials["Material.103"]}
        position={[-1.288, -0.845, 0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Material.104"]}
        position={[0.932, 0.937, 0.6]}
      />
    </group>
  );
};

useGLTF.preload("/mind.glb");
