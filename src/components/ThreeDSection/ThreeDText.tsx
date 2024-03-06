import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRef } from "react";

interface Props {
  primary: string;
  secondary: string;
}

export const ThreeDText = ({ primary, secondary }: Props) => {
  const text1 = useRef(null);
  const text2 = useRef(null);

  return (
    <StyleBox position='relative' cursor='pointer'>
      <Text
        fontSize={{ base: "17vw", md: "17vw", lg: "10vw" }}
        fontWeight={700}
        margin={0}
        transition={"all 0.4s"}
        color='white'
        lineHeight={{ base: "18vw", md: "18vw", lg: "12vw" }}
        ref={text1}
        className='primary'
      >
        {primary}
      </Text>
      <Text
        className='secondary'
        fontSize={{ base: "17vw", md: "17vw", lg: "10vw" }}
        fontWeight={700}
        margin={0}
        transition={"all 0.4s"}
        lineHeight={{ base: "18vw", md: "18vw", lg: "12vw" }}
        ref={text2}
        transform={{
          base: "rotateX(-90deg) translateY(7.5vw)",
          md: "rotateX(-90deg) translateY(5.5vw)",
          lg: "rotateX(-90deg) translateY(4.5vw)",
        }}
        transformOrigin={"bottom center"}
        position={"absolute"}
        top={0}
        color={"#ccf381"}
        opacity={0}
      >
        {secondary}
      </Text>
    </StyleBox>
  );
};

const StyleBox = styled(Box)`
  transition: transform 0.4s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateX(90deg);
  }

  &:hover .secondary {
    opacity: 1;
  }

  &:hover .primary {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
