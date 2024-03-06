import { Box, useMediaQuery, useOutsideClick } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { NavButton } from "./NavButton";
import { NavList } from "./NavList";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const [isMobile] = useMediaQuery("(min-width: 480px)");

  useOutsideClick({
    ref: ref,
    handler: () => setIsActive(false),
  });

  const menu = {
    open: {
      width: !isMobile ? "300px" : "480px",
      height: !isMobile ? "450px" : "650px",
      top: "-25px",
      right: "-25px",
      boxShadow: "0px 8px 28px -9px rgba(0,0,0,0.45)",
      transition: { duration: 0.25, type: "tween", ease: [0.26, 0, 0.14, 1] },
    },
    closed: {
      width: isMobile ? "100px" : "70px",
      height: isMobile ? "40px" : "30px",
      top: "0px",
      right: "0px",
      boxShadow: "none",
      transition: {
        duration: 0.15,
        delay: 0.3,
        type: "tween",
        ease: [0.16, 0, 0.4, 1],
      },
    },
  };

  return (
    <Box
      ref={ref}
      position='fixed'
      right={{ base: "15px", md: "40px" }}
      top={{ base: "25px", md: "35px" }}
      zIndex={1}
    >
      <Box
        as={motion.div}
        w={{ base: "300px", md: "480px" }}
        h='650px'
        bgColor={"#ccf381"}
        borderRadius={"25px"}
        position='relative'
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial='closed'
      >
        <AnimatePresence>
          {isActive && <NavList onClose={() => setIsActive(false)} />}
        </AnimatePresence>
      </Box>
      <NavButton
        isActive={isActive}
        onClick={() => {
          setIsActive((p) => !p);
        }}
      />
    </Box>
  );
};
