import { Box } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { Transition } from "../components/Transition";
import { Contact } from "../components/contact/Contact";
export const ContactPage = () => {
  const isPresent = useIsPresent();

  return (
    <Box
      scrollSnapAlign='center'
      scrollSnapStop='always'
      w='100%'
      h='100%'
      boxSizing='border-box'
      bg='#4831d4'
      overflow='scroll'
    >
      <Helmet>
        <title>Contact Me - Ragool's Portfolio</title>
        <meta
          name='description'
          property='og:description'
          content='My Secret lair which holds a very important secret.'
        />{" "}
      </Helmet>
      <Box py='120px'>
        <Contact />
      </Box>
      <Transition isPresent={isPresent} />
    </Box>
  );
};
