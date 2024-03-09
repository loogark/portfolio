import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useSelectedLanguage } from "../contexts/selectedLanguage";
import { footerLinks, links } from "../data";
import { useTranslation } from "../hooks/useTranslation";

export const Footer = () => {
  const { selectedLang, setSelectedLang } = useSelectedLanguage();
  const [translate] = useTranslation();

  return (
    <Box
      scrollSnapAlign='center'
      scrollSnapStop='always'
      p='36px'
      w='100%'
      h={{ base: "auto", md: "100vh" }}
      bgColor='#000'
    >
      <Flex
        direction='column'
        w='100%'
        h='100%'
        justify='center'
        align='center'
      >
        <Flex
          w='70%'
          justify='center'
          align='center'
          color='#CCF381'
          direction={{ base: "column", md: "row" }}
          gap={"20%"}
          mb='40px'
          mt='10px'
          wrap={"wrap"}
        >
          <VStack
            w={{ base: "100%", md: "40%" }}
            align='flex-start'
            fontSize='18px'
            spacing='8px'
          >
            {links.map((link, i) => {
              const { title, href, translationKey } = link;
              return (
                <ReactRouterLink to={href} key={i} color='#CCF381'>
                  <Text
                    fontSize='24px'
                    textDecoration={i === 3 ? "line-through" : "none"}
                  >
                    {translate(title, translationKey as any)}
                  </Text>
                </ReactRouterLink>
              );
            })}
          </VStack>

          <VStack
            w={{ base: "100%", md: "40%" }}
            mt='10px'
            align='flex-start'
            fontSize='18px'
            spacing='8px'
          >
            {footerLinks.map((link, i) => {
              const { title, href, translationKey } = link;
              return (
                <Link
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  href={href}
                  key={i}
                  color='#CCF381'
                >
                  <Text fontSize='24px'>
                    {translate(title, translationKey as any)}
                  </Text>
                </Link>
              );
            })}

            <Flex direction='column' wrap={"wrap"}>
              <Heading
                fontSize='1rem'
                lineHeight={"1rem"}
                fontWeight={600}
                letterSpacing={1}
                mt='1rem'
              >
                Languages
              </Heading>
              <Flex flexDirection='row' wrap='wrap'>
                <Button
                  variant='Link'
                  pl={0}
                  color={selectedLang === "en" ? "#4831d4" : "#CCF381"}
                  onClick={() => {
                    setSelectedLang("en");
                  }}
                >
                  English
                </Button>
                <Button
                  variant='Link'
                  pl={0}
                  color={selectedLang === "fr" ? "#4831d4" : "#CCF381"}
                  onClick={() => {
                    setSelectedLang("fr");
                  }}
                >
                  French
                </Button>
              </Flex>
            </Flex>
          </VStack>
        </Flex>

        <Divider orientation='horizontal' w='70%' />
        <Flex
          wrap={"wrap"}
          mt='54px'
          direction='row'
          justify='center'
          align='center'
          gap={"12px"}
          w='70%'
        >
          <Flex
            justify='flex-start'
            color='#CCF381'
            direction='row'
            textAlign='start'
          >
            <Text mr='2px'>© 2024 </Text>
            <Text>
              {" "}
              {translate("Made with 💖 by:", "madeWith")}{" "}
              <Link
                color='#CCF381'
                href='https://www.linkedin.com/in/ragool-krishnan/'
                isExternal
              >
                Ragool
              </Link>
            </Text>
          </Flex>
          <Text color='#CCF381'>
            {translate(
              "Thank you so much for all the tutorials and inspiration for this.",
              "homage"
            )}{" "}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
