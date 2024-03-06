import { Heading, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Nav } from "./nav/Nav";

export const Header = () => {
  return (
    <>
      <HeaderLogo /> <Nav />
    </>
  );
};

const HeaderLogo = () => {
  const [isMobile] = useMediaQuery("(min-width: 480px)");

  return (
    <Link to='/'>
      <StyledBox
        position='fixed'
        left={{ base: "10px", md: "40px" }}
        top={{ base: "25px", md: "35px" }}
        zIndex={1}
        cursor='pointer'
        as={motion.div}
        whileHover={{
          rotate: 360,
          transition: { duration: 2 },
        }}
      >
        <svg
          width={!isMobile ? "30" : "35"}
          height={!isMobile ? "30" : "35"}
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24.7 0C11.1 0 0 11.1 0 24.7C0 38.3 11.1 49.4 24.7 49.4C38.3 49.4 49.4 38.3 49.4 24.7C49.4 11.1 38.3 0 24.7 0ZM6.9 24.7C6.9 19.6 9.1 14.9 12.6 11.7C14 10.4 16.4 10.8 17.4 12.5L23.6 23.2C24.2 24.2 24.2 25.4 23.6 26.4L17.4 37.1C16.4 38.9 14 39.2 12.5 37.8C9.1 34.4 6.9 29.8 6.9 24.7ZM32 36.9L25.8 26.2C25.2 25.2 25.2 24 25.8 23L32 12.3C33 10.6 35.3 10.2 36.8 11.5C40.3 14.7 42.5 19.4 42.5 24.5C42.5 29.6 40.3 34.3 36.8 37.5C35.3 39.1 33 38.7 32 36.9Z'
            fill='#CCF381'
          />
        </svg>
      </StyledBox>
    </Link>
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
  }
`;
