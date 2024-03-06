import { Box, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useIsPresent } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Self } from "../components/Self";
import { Transition } from "../components/Transition";
import { Contact } from "../components/contact/Contact";
import { Hero } from "../components/hero/Hero";
import { SkillsProgress } from "../components/skills/SkillsProgress";
import { SkillsSquare } from "../components/skills/SkillsSquare";

export const HomePage = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1200px)");
  const isPresent = useIsPresent();

  const selfRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (selfRef.current) {
      selfRef.current.scrollIntoView({ behavior: "smooth" });
      localStorage.setItem("hasScrolled", "true");
    }
  };

  return (
    <StyledBox w='100%' h='100%'>
      <Helmet>
        <title>Home Page</title>
        <meta
          name='description'
          property='og:description'
          content='Personal portfolio of Ragool krishnan created using React, TypeScript, Chakra-Ui and Framer Motion.'
        />{" "}
      </Helmet>
      <Hero onScroll={onScroll} />
      <Box
        w='100%'
        h={{ base: "auto", md: "100vh" }}
        bg='#4831d4'
        scrollSnapAlign='start'
        scrollSnapStop='always'
        as='section'
        overflow='hidden'
        ref={selfRef}
        py={{ base: "60px", md: "0px" }}
      >
        <Self />
      </Box>
      <Box
        scrollSnapAlign='start'
        scrollSnapStop='always'
        w='100%'
        h={{ base: "auto", md: "100vh" }}
        bg='rgb(0, 0, 0)'
        as='section'
        overflow='hidden'
      >
        {isLargeScreen ? <SkillsSquare /> : <SkillsProgress />}
      </Box>
      <Box
        scrollSnapAlign='start'
        scrollSnapStop='always'
        w='100%'
        h={{ base: "auto", md: "100vh" }}
        bg='#4831d4'
        as='section'
        py={{ base: "75px", md: "0px" }}
      >
        <Contact />
      </Box>
      <Transition isPresent={isPresent} />
      <Footer isFull />
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;
