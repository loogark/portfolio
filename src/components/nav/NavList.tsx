import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ReactRouterLik } from "react-router-dom";
import { footerLinks, links } from "../../data";
import { perspective, slideIn } from "./animation";

interface NavListProps {
  onClose: () => void;
}

export const NavList = ({ onClose }: NavListProps) => {
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
          const { title, href } = link;
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
                  {title}
                </Box>
              </Box>
            </Link>
          );
        })}
      </Flex>

      <Flex wrap='wrap' as={motion.div}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
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
              {title}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
