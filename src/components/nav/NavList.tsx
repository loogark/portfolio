import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ReactRouterLik } from "react-router-dom";
import { useSelectedLanguage } from "../../contexts/selectedLanguage";
import { footerLinks, links } from "../../data";
import { useTranslation } from "../../hooks/useTranslation";
import { perspective, slideIn } from "./animation";

interface NavListProps {
  onClose: () => void;
}

export const NavList = ({ onClose }: NavListProps) => {
  const { selectedLang, setSelectedLang } = useSelectedLanguage();
  const [translate] = useTranslation();

  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      p={{ base: "50px 20px 25px 20px", md: "100px 40px 50px 40px" }}
      h='100%'
      boxSizing={"border-box"}
    >
      <Flex gap='10px' flexDirection='column'>
        {links.map((link, i) => {
          const { title, href, translationKey } = link;
          return (
            <Link
              variant='unstyled'
              textDecoration={i === 3 ? "line-through" : "none"}
              as={ReactRouterLik}
              color='black'
              fontSize={{ base: "16px", md: "35px" }}
              fontWeight={700}
              to={href}
              onClick={onClose}
              _hover={{ textDecoration: i === 3 ? "line-through" : "none" }}
            >
              <Box
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{ perspectiveOrigin: "bottom" }}
                key={`b_${i}`}
              >
                <Box
                  as={motion.div}
                  custom={i}
                  variants={perspective}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                >
                  {translate(title, translationKey as any)}
                </Box>
              </Box>
            </Link>
          );
        })}
      </Flex>

      <Flex direction='column' wrap={"wrap"} as={motion.div}>
        <Heading
          as={motion.h6}
          initial='initial'
          animate='enter'
          exit='exit'
          fontSize='1rem'
          lineHeight={"1rem"}
          fontWeight={600}
          letterSpacing={1}
          variants={slideIn}
          custom={0}
        >
          Languages
        </Heading>
        <Flex
          initial='initial'
          animate='enter'
          exit='exit'
          as={motion.div}
          flexDirection='row'
          wrap='wrap'
        >
          <Button
            as={motion.button}
            custom={0}
            variants={perspective}
            initial='initial'
            animate='enter'
            exit='exit'
            variant='Link'
            pl={0}
            color={selectedLang === "en" ? "#4831d4" : "black"}
            onClick={() => {
              setSelectedLang("en");
              onClose();
            }}
          >
            English
          </Button>
          <Button
            as={motion.button}
            custom={1}
            variants={perspective}
            initial='initial'
            animate='enter'
            exit='exit'
            variant='Link'
            color={selectedLang === "fr" ? "#4831d4" : "black"}
            onClick={() => {
              setSelectedLang("fr");
              onClose();
            }}
          >
            French
          </Button>
        </Flex>
      </Flex>

      <Flex wrap='wrap' as={motion.div}>
        {footerLinks.map((link, i) => {
          const { title, href, translationKey } = link;
          return (
            <Link
              as={motion.a}
              href={href}
              isExternal
              w='50%'
              mt='5px'
              textDecoration={"none"}
              color='black'
              variants={slideIn}
              custom={i}
              initial='initial'
              animate='enter'
              exit='exit'
              key={`f_${i}`}
              _hover={{ textDecoration: "none", color: "#4831d4" }}
            >
              {translate(title, translationKey as any)}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
