import { Box } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { MaskedText } from "../components/MaskedHero/MaskedText";
import { ScrollingText } from "../components/ScrollingText";
import { ThreeDSection } from "../components/ThreeDSection/ThreeDSection";
import { Transition } from "../components/Transition";
import { useTranslation } from "../hooks/useTranslation";

export const SecretLairPage = () => {
  const isPresent = useIsPresent();
  const [translate] = useTranslation();

  return (
    <Box w='100%' h='100%'>
      <Helmet>
        <title>
          {translate("Secret Lair", "secretLair")} -
          {translate("Ragool's Portfolio", "title")}
        </title>
        <meta
          name='description'
          property='og:description'
          content={translate(
            "My Secret lair which holds a very important secret.",
            "secretLairDescription"
          )}
        />
        <meta
          name='url'
          property='og:url'
          content='https://www.ragools.com/secret-lair'
        />
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
