import { Box, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { ScrollIndicator } from "../ScrollIndicator";
import HeroMedia from "./HeroMedia";
import { HeroText } from "./HeroText";

interface Props {
  onScroll: () => void;
}

export const Hero = ({ onScroll }: Props) => {
  const ref = useRef(null);
  const hasScrolled = localStorage.getItem("hasScrolled");

  return (
    <Box
      ref={ref}
      scrollSnapAlign='center'
      as='section'
      w='100%'
      h='100vh'
      position='relative'
      sx={{ perspective: "500px" }}
    >
      <Box
        position='relative'
        w='100%'
        h='100%'
        zIndex={-1}
        backdropFilter={"blur(40px)"}
      >
        <HeroMedia />
        <Box
          position='absolute'
          top='0'
          left='0'
          w='100%'
          h='100%'
          background={"black"}
          opacity={0.8}
        ></Box>
      </Box>
      <Flex
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        justify='center'
        align='center'
      >
        <HeroText />
      </Flex>
      {!hasScrolled?.length && <ScrollIndicator onClick={onScroll} />}
    </Box>
  );
};
