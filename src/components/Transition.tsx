import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  isPresent: boolean;
}
export const Transition = ({ isPresent }: Props) => {
  return (
    <Box
      as={motion.div}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circIn" } }}
      style={{ originX: isPresent ? 0 : 1 }}
      position='fixed'
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor={"#ccf381"}
      zIndex={100}
    />
  );
};
