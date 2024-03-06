import {
  Container,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MediaModal } from "../modals/MediaModal";
import { ModalViewer } from "./modal/ModalViewer";

export const Self = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 500px)");

  return (
    <Flex
      as={motion.div}
      w='100%'
      h='100%'
      justify='center'
      align='center'
      direction='row'
      py={{ base: "24px", md: "32px", lg: "64px" }}
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      wrap={"wrap"}
    >
      <Flex
        direction='column'
        w={{ base: "100%", lg: "70%" }}
        h='100%'
        justify='center'
        align='flex-start'
        px='18px'
        flexShrink={0}
      >
        <Heading
          color='#ccf381'
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
          letterSpacing='1.5px'
        >
          What have i done ?
        </Heading>
        <Text
          width={{ base: "100%", lg: "90%" }}
          my={"4px"}
          fontSize={{ base: "lg", md: "xl" }}
          color='#fdf0d5'
        >
          Over the years, I have worked on a variety of projects, from financial
          applications, Web3 based search engine, to BMS (Block Management
          System) application. I have worked with variety of technologies,
          including React, CSS, CSS-in-js, Typescript, and Node.js and MongoDb.
        </Text>
        <Text
          width={{ base: "100%", lg: "90%" }}
          my={"4px"}
          fontSize={{ base: "lg", md: "xl" }}
          color='#fdf0d5'
        >
          As a front-end developer i draw inspiration from a combination of
          creativity, user experience, and technological advancements. i am also
          driven by a passion for crafting visually appealing and user-friendly
          interfaces. Staying updated on design trends, experimenting with new
          technologies, and collaborating with cross-functional teams are common
          sources of inspiration. Additionally, the desire to create seamless
          and responsive web applications that enhance user engagement and
          satisfaction motivates front-end developers in their continuous
          pursuit of innovative solutions and elevated user experiences.{" "}
          <Link to='/self' color='#ccf381' style={{ color: "#ccf381" }}>
            Check for more info here.
          </Link>
        </Text>
      </Flex>
      {isLargeScreen && (
        <Container id='modal' w='30%' h='100%'>
          <ModalViewer>
            {" "}
            <MediaModal />
          </ModalViewer>
        </Container>
      )}
    </Flex>
  );
};
