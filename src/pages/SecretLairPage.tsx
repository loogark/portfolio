import { Box } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { MaskedText } from "../components/MaskedHero/MaskedText";
import { ScrollingText } from "../components/ScrollingText";
import { ThreeDSection } from "../components/ThreeDSection/ThreeDSection";
import { Transition } from "../components/Transition";

export const SecretLairPage = () => {
  const isPresent = useIsPresent();

  return (
    <Box w='100%' h='100%'>
      <Helmet>
        <title>Secret Lair - Ragool's Portfolio</title>
        <meta
          name='description'
          property='og:description'
          content='My Secret lair which holds a very important secret.'
        />{" "}
      </Helmet>
      <Box
        scrollSnapAlign='center'
        scrollSnapStop='always'
        bg='#4831d4'
        as='section'
        h='100vh'
        w='100%'
        overflow='hidden'
      >
        <MaskedText />
      </Box>
      <Box
        overflow='hidden'
        scrollSnapAlign='center'
        scrollSnapStop='always'
        as='section'
        h='100vh'
        w='100%'
      >
        <ScrollingText />
      </Box>
      <ThreeDSection />
      <Transition isPresent={isPresent} />
    </Box>
  );
};
