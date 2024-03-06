import { Box, Divider, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { footerLinks, links } from "../data";

interface Props {
  isFull?: boolean;
}
export const Footer = ({ isFull }: Props) => {
  return (
    <Box
      scrollSnapAlign='center'
      scrollSnapStop='always'
      p='36px'
      w='100%'
      h={isFull ? "100vh" : "400px"}
      bgColor='#000'
    >
      <Flex
        direction='column'
        w='100%'
        h='100%'
        justify='center'
        align='center'
      >
        <Flex
          w='70%'
          justify='center'
          align='center'
          color='#CCF381'
          direction={{ base: "column", md: "row" }}
          gap={"20%"}
          mb='40px'
          mt='10px'
          wrap={"wrap"}
        >
          <VStack
            w={{ base: "100%", md: "40%" }}
            align='flex-start'
            fontSize='18px'
            spacing='8px'
          >
            {links.map((link, i) => {
              const { title, href } = link;
              return (
                <ReactRouterLink to={href} key={i} color='#CCF381'>
                  <Text
                    fontSize='24px'
                    textDecoration={i === 3 ? "line-through" : "none"}
                  >
                    {title}
                  </Text>
                </ReactRouterLink>
              );
            })}
          </VStack>

          <VStack
            w={{ base: "100%", md: "40%" }}
            mt='10px'
            align='flex-start'
            fontSize='18px'
            spacing='8px'
          >
            {footerLinks.map((link, i) => {
              const { title, href } = link;
              return (
                <ReactRouterLink to={href} key={i} color='#CCF381'>
                  <Text fontSize='24px'>{title}</Text>
                </ReactRouterLink>
              );
            })}
          </VStack>
        </Flex>

        <Divider orientation='horizontal' w='70%' />
        <Flex
          wrap={"wrap"}
          mt='54px'
          direction='row'
          justify='center'
          align='center'
          gap={"12px"}
          w='70%'
        >
          <Flex
            justify='flex-start'
            color='#CCF381'
            direction='row'
            textAlign='start'
          >
            <Text mr='2px'>© 2024 </Text>
            <Text>
              {" "}
              Made with 💖 by:{" "}
              <Link
                color='#CCF381'
                href='https://www.linkedin.com/in/ragool-krishnan/'
              >
                Ragool
              </Link>
            </Text>
          </Flex>
          <Text color='#CCF381'>
            Thank you so much for all the tutorials and inspiration for this.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
