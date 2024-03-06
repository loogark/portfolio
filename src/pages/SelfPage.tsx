import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { Transition } from "../components/Transition";
import { ResumeCard } from "../components/resume-card/ResumeCard";
import { Timeline } from "../components/timeline/Timeline";

export const SelfPage = () => {
  const isPresent = useIsPresent();

  return (
    <Box w='100%' h='auto' bgColor='#4831d4'>
      <Helmet>
        <title>My Self - Ragool's Portfolio</title>
        <meta
          name='description'
          property='og:description'
          content='Know me better through my journey.'
        />{" "}
      </Helmet>
      <Flex
        pt='120px'
        pb='24px'
        px='12px'
        justify='center'
        align='center'
        direction='column'
        w='100%'
        h='100%'
      >
        <Flex
          w={{ base: "95%", md: "80%" }}
          h='100%'
          direction='column'
          justify='center'
          align='center'
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
            color='#ccf381'
            letterSpacing='1.2px'
            mb='24px'
            textAlign='center'
          >
            My self
          </Heading>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            I'm Ragool, a seasoned front-end developer with over 3 years of
            experience in the field. My educational journey started with Noble
            Matriculation in 2012, followed by completing my undergraduate
            degree from Bharath University in 2016. Eager to deepen my
            knowledge, I pursued a Master's in Computer Science from ISEP,
            graduating in 2019.
          </Text>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            During my academic journey, I gained practical industry experience
            through a six-month internship with Flaminem, a fintech company.
            This opportunity allowed me to apply my theoretical knowledge to
            real-world scenarios, honing my skills and preparing me for the
            professional landscape.
          </Text>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            My career officially took off when I secured a position with
            Sievable, a web3-based search engine, marking my entry into the
            dynamic world of web development. Currently, I'm contributing my
            expertise as a front-end developer at Notice, a no-code content
            management company. I remain committed to staying at the forefront
            of technological advancements, bringing innovation and proficiency
            to my role in the ever-evolving field of front-end development.
          </Text>
        </Flex>
        <Flex
          justify='space-evenly'
          align='center'
          py='64px'
          direction='row'
          minH='600px'
          width='100%'
          h={"100%"}
          wrap={"wrap"}
          mt='20px'
        >
          <Box w='fit-content' h='600px'>
            <Timeline />
          </Box>
          <Box></Box>
          <Flex
            justify='center'
            align='center'
            direction={{ base: "row", md: "column" }}
            w='fit-content'
            h='100%'
            gap={"40px"}
            my='36px'
            wrap={"wrap"}
          >
            <ResumeCard name='EN' link='/en.pdf' />
            <ResumeCard
              name='FR'
              link='/fr.pdf'
              bg='linear-gradient(744deg,#bb3e03,#f28482 60%,#f5cac3)'
            />
          </Flex>
        </Flex>
      </Flex>
      <Transition isPresent={isPresent} />
    </Box>
  );
};
