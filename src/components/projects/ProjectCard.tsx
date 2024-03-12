import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  liveLink?: string;
  githubLink: string;
  progress: any;
  range: number[];
  targetScale: number;
  tags: string[];
  isLastCard: boolean;
  translationKey: any;
}

export const ProjectCard = ({
  i,
  title,
  description,
  src,
  githubLink,
  liveLink,
  progress,
  range,
  targetScale,
  tags,
  isLastCard,
  translationKey,
}: CardProps) => {
  const container = useRef(null);
  const [translate] = useTranslation();

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Box
      height='100vh'
      width='100%'
      position='sticky'
      top='0px'
      display='flex'
      alignItems='center'
      justifyContent='center'
      ref={container}
    >
      <Box
        width='90vw'
        maxW={"1300px"}
        height='fit-content'
        as={motion.div}
        position='relative'
        transformOrigin={"top"}
        top={`calc(-5vh + ${i * 25}px)`}
        bgColor={"rgb(0, 0, 0)"}
        borderRadius={"20px"}
        overflow='hidden'
        p='5px'
        style={{
          scale,
        }}
      >
        <StyledFlex
          height='500px'
          position='relative'
          borderRadius='15px'
          display='flex'
          flexDirection='column'
          bgImage={`/images/${src}`}
          backdropFilter={"grayscale(100%)"}
        >
          <Box
            width='100%'
            height='100%'
            top={0}
            right={0}
            position='absolute'
            zIndex={-1}
            bgImage='linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0))'
          ></Box>

          <StyledBox
            height='60px'
            width='50%'
            bgColor={"rgb(0, 0, 0)"}
            position='relative'
            transform='skew(-40deg)'
            backdropFilter={"grayscale(100%)"}
          />

          <Flex
            justifyContent='space-between'
            width='100%'
            height='80px'
            position='absolute'
            top={"0"}
          >
            <Heading
              height='100%'
              color='white'
              fontSize='24px'
              aspectRatio={1}
              p='7px 0 7px 15px'
              w='100%'
              lineHeight='2.5rem'
              fontStyle={"italic"}
              letterSpacing='2px'
            >
              {i === 4 ? translate(title, "anManyMore") : title}
            </Heading>
            <HStack spacing='10px' h='100%' p='8px 15px'>
              <Tooltip placement='top' label='Github' aria-label='Github'>
                <Link
                  href={githubLink}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <FaGithub size={24} color={"white"} />
                </Link>
              </Tooltip>
              {liveLink && (
                <Tooltip
                  placement='top'
                  label={translate("Live Link", "liveLink")}
                  aria-label='live-link'
                >
                  <Link
                    href={liveLink}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <CiGlobe size={24} color={"white"} />
                  </Link>
                </Tooltip>
              )}
            </HStack>
          </Flex>
          <Flex
            direction='column'
            justify='flex-end'
            align='flex-start'
            mt='15px'
            mb='15px'
            p='10px 25px'
            w='100%'
            h='100%'
            gap={"10px"}
          >
            <Heading letterSpacing='2px' color='#fff' size='xl'>
              {i === 4 ? translate(title, "anManyMore") : title}
            </Heading>
            <Text
              display='block'
              fontWeight='bolder'
              color='#fff'
              fontSize='24px'
            >
              {translate(description, translationKey)}
            </Text>
            <HStack wrap={"wrap"} spacing='10px' mt='10px'>
              {tags.map((tag, i) => {
                return (
                  <Tag variant='solid' bg='#4831d4' key={`t_${i}`}>
                    {tag}
                  </Tag>
                );
              })}
            </HStack>
            {isLastCard && (
              <Button
                bg={"#4831d4"}
                onClick={() =>
                  window.open("https://github.com/loogar", "_blank")
                }
              >
                Git Repos
              </Button>
            )}
          </Flex>
        </StyledFlex>
      </Box>
    </Box>
  );
};

const StyledBox = styled(Box)`
  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
  }
`;

const StyledFlex = styled(Flex)`
  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
  }
`;
