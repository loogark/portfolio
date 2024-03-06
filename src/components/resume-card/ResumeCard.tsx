import { Box, Heading, Link, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const wave = keyframes`
   0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

interface ResumeCardProps {
  name: string;
  link: string;
  bg?: string;
}

export const ResumeCard = ({
  name,
  link,
  bg = "linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb)",
}: ResumeCardProps) => {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        as={motion.div}
        bg='transparent'
        overflow='hidden'
        boxShadow={"0px 8px 28px -9px rgba(0,0,0,0.45)"}
        position='relative'
        w={{ base: "140px", md: "240px" }}
        h={{ base: "200px", md: "300px" }}
        borderRadius='16px'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          bg={bg}
          position='absolute'
          w='540px'
          h='700px'
          opacity='0.6'
          top='70%'
          left='0'
          marginLeft='-50%'
          marginTop='-70px'
          borderRadius='40%'
          animation={`${wave} 70s infinite linear`}
        ></Box>
        <Box
          bg={bg}
          position='absolute'
          w='540px'
          h='700px'
          opacity='0.6'
          top='210px'
          left='65%'
          marginLeft='-50%'
          marginTop='-70px'
          borderRadius='40%'
          animation={`${wave} 60s infinite linear`}
        ></Box>
        <Box
          bg={bg}
          position='absolute'
          w='540px'
          h='700px'
          opacity='0.6'
          top='55%'
          left='0'
          marginLeft='-50%'
          marginTop='-70px'
          borderRadius='40%'
          animation={`${wave} 50s infinite linear`}
        ></Box>
        <Box
          textAlign='center'
          fontSize='20px'
          position='absolute'
          top={"25%"}
          left={0}
          right={0}
          color='rgb(255, 255, 255)'
          fontWeight={600}
        >
          <Heading
            letterSpacing='2px'
            fontSize={{ base: "24px", md: "54px" }}
            color='white'
            fontWeight={600}
          >
            {name}
          </Heading>
          Resume
        </Box>
      </Box>{" "}
    </Link>
  );
};
