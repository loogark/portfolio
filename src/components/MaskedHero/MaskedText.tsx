import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { useTranslation } from "../../hooks/useTranslation";

export const MaskedText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const [translate] = useTranslation();

  return (
    <>
      <Flex
        as={motion.div}
        w='100%'
        h='100%'
        boxSizing='border-box'
        position='absolute'
        align='center'
        justify='center'
        fontSize={{ base: "10vw", lg: "5vw" }}
        lineHeight={{ base: "10vw", lg: "5vw" }}
        color='white'
        cursor='default'
        style={{
          maskImage: "url('/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "50px",
          background: "#ccf381",
          color: "#4831d4",
          position: "absolute",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          transition: { type: "tween", ease: "backOut", duration: 0.5 },
        }}
      >
        <Heading
          w='1000px'
          p='40px'
          lineHeight='inherit'
          fontSize='inherit'
          letterSpacing={"2.5px"}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {translate(
            `In other words you might have found out by now how mediocre of a
          developer i am, i thought at least we can have fun with this.`,
            "maskedText"
          )}
        </Heading>
      </Flex>

      <Flex
        w='100%'
        h='100%'
        align='center'
        justify='center'
        fontSize={{ base: "10vw", lg: "5vw" }}
        lineHeight={{ base: "10vw", lg: "5vw" }}
        color='white'
        cursor='default'
      >
        <Heading
          lineHeight='inherit'
          fontSize='inherit'
          letterSpacing={"2.5px"}
          w='1000px'
          p='40px'
        >
          {translate(
            ` Welcome to my secret lair, meet a UI/UX Avenger 🦹🏽‍♂️, who dedicated his
            life to vanquishing the sinister forces of Bad UI and UX that plague
            websites.`,
            "maskedText1"
          )}{" "}
        </Heading>
      </Flex>
    </>
  );
};
