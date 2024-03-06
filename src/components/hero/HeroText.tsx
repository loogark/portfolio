import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export const HeroText = () => {
  const [scope, animate] = useAnimate();

  const heroAnimate = async () => {
    await animate(scope.current, {
      x: -1000,
      opacity: [0, 1],
    });

    await animate(scope.current, {
      transform: "skew(0, 0deg)",
    });

    await animate(
      "#hero-text",
      {
        opacity: [0.2, 0, 0.6, 0, 0.8, 0, 1],
      },
      { duration: 0.8, delay: 0.5 }
    );
    await animate(
      scope.current,
      {
        transform: "skew(0, -10deg)",
      },
      { duration: 0.7, delay: 0.5 }
    );
  };

  useEffect(() => {
    heroAnimate();
  }, []);

  const shadow = `3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff,
    3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb,
    6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff,
    6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb,
    9px 7px 1px #4af7ff`;

  return (
    <Grid
      px={{ base: "0px", lg: "120px" }}
      alignItems='center'
      justifyContent='center'
      ref={scope}
    >
      <StyledBox
        id='hero-text'
        order={2}
        as='h1'
        color='#fde9ff'
        fontWeight={900}
        textTransform='uppercase'
        fontSize={{
          base: "clamp(2.5rem, 90vw, 3.5rem)",
          md: "clamp(6rem, 80vw, 8rem)",
          lg: "clamp(8rem, 40vw, 10rem)",
        }}
        lineHeight='0.75em'
        textAlign={{ base: "start", md: "center" }}
        textShadow={shadow}
        fontFamily={"'Zen Dots', system-ui"}
        opacity={0.2}
      >
        <Box as='span' data-text="I'm">
          I'm{" "}
        </Box>
        <Box as='span' data-text='Ragool' pl={{ base: "0px", md: "2.25rem" }}>
          Ragool
        </Box>
      </StyledBox>

      <Text
        id='sub-text'
        order={1}
        as='span'
        textAlign={{ base: "start", md: "center" }}
        display='block'
        color='#fff'
        fontSize={{ base: "2.5rem", md: "3.5rem", lg: "5.5rem" }}
        mb='1rem'
        pr='2rem'
      >
        Welcome
      </Text>
      <Text
        id='sub-text'
        as='span'
        order={2}
        textAlign={{ base: "start", md: "center" }}
        display='block'
        color='#fff'
        fontSize={{ base: "1rem", md: "1.5rem" }}
        mb='1rem'
        pl={{ base: "0px", md: "2rem" }}
      >
        Your friendly Neighborhood web developer
      </Text>
    </Grid>
  );
};

const StyledBox = styled(Heading)`
  span {
    display: block;
    position: relative;
    margin-bottom: 2rem;

    &:before {
      content: attr(data-text);
      position: absolute;
      text-shadow: 2px 2px 1px #e94aa1, -1px -1px 1px #c736f9,
        -2px 2px 1px #e94aa1, 1px -1px 1px #f736f9;
      z-index: 1;
    }

    &:nth-child(1) {
      padding-right: 2.25rem;
    }
  }
`;
