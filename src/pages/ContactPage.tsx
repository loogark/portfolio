import { Box } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { Transition } from "../components/Transition";
import { Contact } from "../components/contact/Contact";
import { useTranslation } from "../hooks/useTranslation";
export const ContactPage = () => {
  const isPresent = useIsPresent();
  const [translate] = useTranslation();

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
        <title>
          {translate("Contact Me", "contactMe")} -{" "}
          {translate("Ragool's Portfolio", "title")}
        </title>
        <meta
          name='description'
          property='og:description'
          content={translate(
            "Get in touch with me for any queries or collaborations.",
            "contactPageDescription"
          )}
        />{" "}
      </Helmet>
      <Box py='120px'>
        <Contact />
      </Box>
      <Transition isPresent={isPresent} />
    </Box>
  );
};
