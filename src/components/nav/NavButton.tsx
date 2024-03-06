import { Box, Button, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
  isActive: boolean;
}

export const NavButton = ({ onClick, isActive }: Props) => {
  return (
    <Button
      variant='unstyled'
      position='absolute'
      top={0}
      right={0}
      w={{ base: "70px", sm: "100px" }}
      height={{ base: "30px", sm: "40px" }}
      borderRadius='25px'
      overflow='hidden'
      cursor={"pointer"}
    >
      <Box
        as={motion.div}
        position='relative'
        w='100%'
        h='100%'
        animate={{
          top: isActive ? "-100%" : "0%",
          transition: {
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        <StyledBox
          bgColor={"#ccf381"}
          w='100%'
          h='100%'
          onClick={() => {
            onClick();
          }}
        >
          <PerspectiveText label='Menu' />
        </StyledBox>
        <Box
          bgColor={"#ccf381"}
          w='100%'
          h='100%'
          onClick={() => {
            onClick();
          }}
        >
          <PerspectiveText label='Close' />
        </Box>
      </Box>
    </Button>
  );
};

const StyledBox = styled(Box)`
  p {
    margin: 0px;
  }
  &:nth-of-type(2) {
    background-color: black;
    p {
      color: #ccf381;
    }
  }
  &:hover {
    .perspectiveText {
      transform: rotateX(90deg);
      p {
        &:nth-of-type(1) {
          transform: translateY(-100%);
          opacity: 0;
        }
        &:nth-of-type(2) {
          opacity: 1;
        }
      }
    }
  }
`;

function PerspectiveText({ label }: { label: string }) {
  return (
    <Flex
      className='perspectiveText'
      direction='column'
      justifyContent='center'
      align='center'
      h='100%'
      w='100%'
      sx={{
        transformStyle: "preserve-3d",
        transition: "transform 0.25s cubic-bezier(0.26, 0, 0.14, 1)",
      }}
    >
      <Text
        as='p'
        textTransform='uppercase'
        pointerEvents='none'
        transition='all 0.25s cubic-bezier(0.26, 0, 0.14, 1)'
      >
        {label}
      </Text>

      <Text
        position='absolute'
        transform='rotateX(-90deg) translateY(9px)'
        transformOrigin='bottom center'
        opacity={0}
        as='p'
      >
        {label}
      </Text>
    </Flex>
  );
}
