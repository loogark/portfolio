import {
  Box,
  Flex,
  Heading,
  IconButton,
  Tooltip,
  keyframes,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const scroll = keyframes`
   	0% {
    top: -100px;
    transform: rotateX(20deg)  translateZ(0);
  }
	100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

export const ScrollingText = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [translate] = useTranslation();

  return (
    <Box w='100%' h='100%' position='relative'>
      <Tooltip placement='top' label={isPlaying ? "pause" : "play"}>
        <IconButton
          position='absolute'
          top={{ base: "35px", md: "75px", lg: "150px" }}
          left={{ base: "20px", md: "40px", lg: "80px" }}
          aria-label={"play-pause"}
          bg='#CCF381'
          icon={
            isPlaying ? <FaPause color='#4831d4' /> : <FaPlay color='#4831d4' />
          }
          isRound
          cursor='pointer'
          onClick={() =>
            setIsPlaying((p) => {
              return !p;
            })
          }
          zIndex={100}
        />
      </Tooltip>
      <Box
        position='relative'
        w='100%'
        minH='60vh'
        top='-25px'
        zIndex={1}
        bgImage={"linear-gradient(0deg, transparent, black 75%)"}
      ></Box>

      <Flex
        justify='center'
        position='relative'
        h='800px'
        color='#CCF381'
        fontSize={{ base: "400%", md: "700%" }}
        fontWeight={600}
        letterSpacing={"6px"}
        lineHeight={"150%"}
        sx={{ perspective: "400px" }}
        textAlign='justify'
      >
        <Box
          position='relative'
          top={"99999px"}
          transformOrigin='50% 100%'
          animation={`${scroll} 90s linear infinite`}
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          <Heading
            letterSpacing='1.5px'
            lineHeight='3.5rem'
            size='5rem'
            as='h1'
          >
            {translate(`Origins`, "origins")}
          </Heading>

          <p style={{ marginTop: "20px" }}>
            {translate(
              `In a galaxy not so far away, on the humble planet Earth, a child was
            born on April 16, 1995.Little did the world know that this seemingly
            ordinary arrival would be destined for an extraordinary fate.`,
              "scrollingText1"
            )}
          </p>

          <p>
            {translate(
              `As the stars aligned and the cosmic forces whispered, it became
              clear that this child was chosen for a mission beyond the ordinary
              confines of existence.`,
              "scrollingText2"
            )}
          </p>

          <p>
            {translate(
              `Destined to be a beacon of hope. The child decided to fight crime
              and injustice when that plan failed miserable he decided to become a
              front end developer.`,
              "scrollingText3"
            )}
          </p>

          <p style={{ marginTop: "50px", marginBottom: "100px" }}>
            {translate(
              `He is been fighting the good fight against bad UI and UX ever since,
              well at least he is trying....`,
              "scrollingText4"
            )}
          </p>
        </Box>
      </Flex>
    </Box>
  );
};
