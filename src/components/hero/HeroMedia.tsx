import { Box } from "@chakra-ui/react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Modal from "./Modal";

export default function HeroMedia() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { damping: 100, mass: 3 }),
  };

  const manageMouse = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  return (
    <Box
      as={motion.div}
      w='100%'
      h='100%'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 3 } }}
    >
      <Canvas
        style={{ background: "#000" }}
        orthographic
        camera={{ position: [0, 0, 200], zoom: 10 }}
      >
        <Modal mouse={smoothMouse} />
        <Environment preset='studio' />
      </Canvas>
    </Box>
  );
}
