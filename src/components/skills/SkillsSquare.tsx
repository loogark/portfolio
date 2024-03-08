import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { HexaGrid } from "./HexaGrid";

export const SkillsSquare = () => {
  const [translate] = useTranslation();

  return (
    <Flex
      as={motion.div}
      position='relative'
      justify='end'
      align='end'
      direction='column'
      w='100%'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <StyledBox mt='-3%' ml='6%' width='40%' bg='rgb(0, 0, 0.92)'>
        <VStack gap='10px' align='start' justify='center'>
          <Heading size='lg' letterSpacing={"1.5px"}>
            {translate("What I bring to the table ?", "whatIBring")}
          </Heading>
          <Text fontSize='xl'>
            {translate(
              `  Proficient in JavaScript, React, TypeScript, React Query, Styled
            Components, Node.js, MongoDB, Next.js, Chakra UI, Apollo GraphQL,
            and REST API development. Experienced in building scalable web
            applications, ensuring clean code practices. Proficient in using
            Visual Studio Code for efficient development workflows.`,
              "skillsSquareP"
            )}{" "}
            <Link to='/projects' style={{ color: "#ccf381" }}>
              {translate("Check my skills at display here.", "checkMySkills")}
            </Link>
          </Text>
        </VStack>
      </StyledBox>
      <HexaGrid />
    </Flex>
  );
};

const StyledBox = styled(Box)`
  position: absolute;
  left: 25px;
  top: 30%;
  color: white;
  padding: 20px;
  z-index: 1;

  background: linear-gradient(black, black) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
  border: 4px solid transparent;
`;
