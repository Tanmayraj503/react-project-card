import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Bounds,
  Center
} from "@react-three/drei";

function DeskModel() {
  const { scene } = useGLTF("/models/desktop.glb");
  return <primitive object={scene} />;
}

export default function DeskScene() {
  return (
    <Canvas
      camera={{ fov: 40 }}
      style={{ height: "100vh" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/* Auto-fit magic */}
      <Bounds fit clip observe margin={1.2}>
        <Center>
          <DeskModel />
        </Center>
      </Bounds>

      <OrbitControls />
    </Canvas>
  );
}
