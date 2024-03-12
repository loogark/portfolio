"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Lenis from "@studio-freight/lenis";
import { useIsPresent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Transition } from "../components/Transition";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../components/projects/data";
import { useTranslation } from "../hooks/useTranslation";

export const ProjectsPage = () => {
  const container = useRef(null);
  const isPresent = useIsPresent();
  const [translate] = useTranslation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Box
      boxSizing='border-box'
      w='100%'
      bgColor='#4831d4'
      ref={container}
      position='relative'
    >
      <Helmet>
        <title>
          {translate("My Projects", "myProjects")} -{" "}
          {translate("Ragool's Portfolio", "title")}
        </title>
        <meta
          name='description'
          property='og:description'
          content={translate(
            "Welcome to my projects showcase, where creativity meets technology!",
            "projectsDescription"
          )}
        />
        <meta
          name='url'
          property='og:url'
          content='https://www.ragools.com/projects'
        />
      </Helmet>
      <Flex
        direction='column'
        justify='center'
        align='center'
        w='100%'
        h={{ base: "auto", md: "auto", lg: "50vh" }}
        pt={{ base: "200px", md: "200px", lg: "120px" }}
      >
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
          color='#ccf381'
          letterSpacing={"1px"}
          mb='24px'
        >
          {translate("Projects Showcase", "projectsShowcase")}
        </Heading>
        <Text
          textAlign='center'
          width={{ base: "95%", md: "80%", lg: "70%" }}
          maxW='1300px'
          color='#fff'
          fontSize={{ base: "md", md: "xl" }}
        >
          {translate(
            `Welcome to my projects showcase, where creativity meets technology!
          I'm an enthusiastic individual who loves exploring various facets of
          software development. Here's a glimpse into some of my passion-driven
          creations`,
            "projectsP1"
          )}
        </Text>
      </Flex>

      {projects.map((project, i) => {
        const length = (projects.length - i) * 0.05;
        const targetScale = 1 - length;

        return (
          <ProjectCard
            githubLink={project.github_link}
            liveLink={project.live_link}
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            tags={project.technology_used}
            isLastCard={i === projects.length - 1}
          />
        );
      })}

      <Transition isPresent={isPresent} />
    </Box>
  );
};
