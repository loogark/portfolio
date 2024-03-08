import { Box, Tooltip, keyframes } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiApollographql,
  SiChakraui,
  SiGraphql,
  SiMixpanel,
  SiMongodb,
  SiNotion,
  SiReactquery,
  SiStyledcomponents,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbBrandFramerMotion,
  TbBrandThreejs,
  TbBrandVscode,
} from "react-icons/tb";

const animate = keyframes`
  from {filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
`;

export const HexaGrid = () => {
  return (
    <Box
      w='100%'
      position='relative'
      overflow='hidden'
      animation={`${animate} 4s linear infinite`}
    >
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon></StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <Tooltip label='Figma'>
          <StyledHexogon>
            {" "}
            <IoLogoFigma size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Typescript'>
          <StyledHexogon>
            {" "}
            <SiTypescript size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Javascript'>
          <StyledHexogon>
            {" "}
            <IoLogoJavascript size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='VS code'>
          <StyledHexogon>
            {" "}
            <TbBrandVscode size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <Tooltip label='Github'>
          <StyledHexogon>
            {" "}
            <FaGithub size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='CSS 3'>
          <StyledHexogon>
            {" "}
            <FaCss3 size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='React js'>
          <StyledHexogon>
            <FaReact size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Styled components'>
          <StyledHexogon>
            {" "}
            <SiStyledcomponents size={50} />{" "}
          </StyledHexogon>
        </Tooltip>

        <Tooltip label='Vercel'>
          <StyledHexogon>
            {" "}
            <SiVercel size={50} />{" "}
          </StyledHexogon>
        </Tooltip>

        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon></StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>

        <Tooltip label='Framer Motion'>
          <StyledHexogon>
            {" "}
            <TbBrandFramerMotion size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='chakra UI'>
          <StyledHexogon>
            {" "}
            <SiChakraui size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='HTMl 5'>
          <StyledHexogon>
            {" "}
            <FaHtml5 size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='node.js'>
          <StyledHexogon>
            {" "}
            <FaNode size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='mongoDB'>
          <StyledHexogon>
            {" "}
            <SiMongodb size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='three.js'>
          <StyledHexogon>
            {" "}
            <TbBrandThreejs size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <Tooltip label='Notion'>
          <StyledHexogon>
            {" "}
            <SiNotion size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='graphQL'>
          <StyledHexogon>
            {" "}
            <SiGraphql size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Rest API'>
          <StyledHexogon>
            {" "}
            <TbApi size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Apollo client'>
          <StyledHexogon>
            {" "}
            <SiApollographql size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Mixpanel'>
          <StyledHexogon>
            {" "}
            <SiMixpanel size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon></StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>

        <Tooltip label='vite'>
          <StyledHexogon>
            {" "}
            <SiVite size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='scss'>
          <StyledHexogon>
            {" "}
            <FaSass size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='React Query'>
          <StyledHexogon>
            {" "}
            <SiReactquery size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <Tooltip label='Vue'>
          <StyledHexogon>
            {" "}
            <FaVuejs size={50} />{" "}
          </StyledHexogon>
        </Tooltip>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon></StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
      <StyledRow>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
        <StyledHexogon> </StyledHexogon>
      </StyledRow>
    </Box>
  );
};

const StyledRow = styled(Box)`
  display: inline-flex;
  display: inline-flex;
  margin-left: -50px;
  margin-top: -32px;
  overflow: hidden;

  &:nth-child(even) {
    margin-left: 1px;
  }
`;

const StyledHexogon = styled(Box)`
  color: white;
  position: relative;
  height: 110px;
  width: 100px;
  background: #111;
  margin: 1px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.02);
  }
  &:hover {
    transition: 0s;
    background: #0f0;
  }
`;
