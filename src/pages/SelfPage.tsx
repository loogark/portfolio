import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useIsPresent } from "framer-motion";
import { Helmet } from "react-helmet";
import { Transition } from "../components/Transition";
import { ResumeCard } from "../components/resume-card/ResumeCard";
import { Timeline } from "../components/timeline/Timeline";
import { useTranslation } from "../hooks/useTranslation";

export const SelfPage = () => {
  const isPresent = useIsPresent();
  const [translate] = useTranslation();

  return (
    <Box w='100%' h='auto' bgColor='#4831d4'>
      <Helmet>
        <title>
          {translate("Me, Myself and I", "mySelf")} -
          {translate("Ragool's Portfolio", "title")}
        </title>
        <meta
          name='description'
          property='og:description'
          content={translate(
            "Know me better through my journey.",
            "selfPageDescription"
          )}
        />
        <meta
          name='url'
          property='og:url'
          content='https://www.ragools.com/self'
        />
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
            {translate("Me, Myself and I", "mySelf")}{" "}
          </Heading>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            {translate(
              `  I'm Ragool, a seasoned front-end developer with over 3 years of
            experience in the field. My educational journey started with Noble
            Matriculation in 2012, followed by completing my undergraduate
            degree from Bharath University in 2016. Eager to deepen my
            knowledge, I pursued a Master's in Computer Science from ISEP,
            graduating in 2019.`,
              "selfPageP1"
            )}
          </Text>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            {translate(
              `During my academic journey, I gained practical industry experience
              through a six-month internship with Flaminem, a fintech company.
              This opportunity allowed me to apply my theoretical knowledge to
              real-world scenarios, honing my skills and preparing me for the
              professional landscape.`,
              "selfPageP2"
            )}
          </Text>
          <Text color='#fdf0d5' fontSize={{ base: "md", md: "xl" }} my={"4px"}>
            {translate(
              `My career officially took off when I secured a position with
              Sievable, a web3-based search engine, marking my entry into the
              dynamic world of web development. Currently, I'm contributing my
              expertise as a front-end developer at Notice, a no-code content
              management company. I remain committed to staying at the forefront
              of technological advancements, bringing innovation and proficiency
              to my role in the ever-evolving field of front-end development.`,
              "selfPageP3"
            )}
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
            <ResumeCard name='EN' link='/resumes/en.pdf' />
            <ResumeCard
              name='FR'
              link='/resumes/fr.pdf'
              bg='linear-gradient(744deg,#bb3e03,#f28482 60%,#f5cac3)'
            />
          </Flex>
        </Flex>
      </Flex>
      <Transition isPresent={isPresent} />
    </Box>
  );
};
