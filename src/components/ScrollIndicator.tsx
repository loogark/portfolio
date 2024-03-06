import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const scroll = keyframes`
    0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  25% {
    transform: scaleY(1);
    transform-origin: top;
  }
  26% {
    transform-origin: bottom;
  }
  50% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
`;

interface Props {
  onClick: () => void;
}

export const ScrollIndicator = ({ onClick }: Props) => {
  return (
    <Box
      as={motion.div}
      w='fit-content'
      h='fit-content'
      position='absolute'
      bottom={"15px"}
      left='50%'
      transform={"translateX(-50%)"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, delay: 4 } }}
      onClick={onClick}
      cursor='pointer'
    >
      <Box
        h='45px'
        w='24px'
        border='3px solid white'
        borderRadius='32px'
        position='relative'
      >
        <Box
          position='absolute'
          h='15px'
          w='2px'
          bg='white'
          right={0}
          left={0}
          margin={"0 auto"}
          top='10px'
          borderRadius='1px'
          transform={"scaleY(0)"}
          animation={`${scroll} 2s linear infinite`}
        ></Box>
      </Box>
    </Box>
  );
};
