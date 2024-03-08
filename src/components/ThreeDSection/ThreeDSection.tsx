import { Box, Flex, Progress, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { ThreeDText } from "./ThreeDText";

export const ThreeDSection = () => {
  const plane = useRef<HTMLDivElement | null>(null);
  const maxRotate = 45;
  const [translate] = useTranslation();

  const manageMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current!.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  return (
    <Box
      onMouseMove={manageMouseMove}
      bg='#4831d4'
      as='section'
      scrollSnapAlign='center'
      scrollSnapStop='always'
      minH='100vh'
      h='auto'
      w='100%'
      p='24px'
      overflow='hidden'
    >
      <Flex
        gap={"46px"}
        mb='10vh'
        direction='row'
        align='end'
        justify='start'
        wrap='wrap'
      >
        <Flex
          ref={plane}
          direction='column'
          mt={{ base: "10vh", md: "8vh", lg: "20vh" }}
          ml={{ base: "10px", md: "15px", lg: "25px" }}
        >
          <ThreeDText
            primary={translate("Weapons", "weapons")}
            secondary={translate("That I", "thatI")}
          />
          <ThreeDText
            primary={translate("On My", "onMy")}
            secondary={translate("Definitely", "definitely")}
          />
          <ThreeDText
            primary={translate("Arsenal", "arsenal")}
            secondary={translate("Know of", "knowOf")}
          />
        </Flex>
        <Flex
          ml={{ base: "15px", md: "25px", lg: "50px" }}
          direction={"column"}
          align='center'
          justify='center'
          gap={"36px"}
          w={{ base: "100%", lg: "30%" }}
        >
          <Flex
            w='100%'
            direction='column'
            justify='center'
            align='center'
            gap={"20px"}
          >
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Javascript, Typescript{" "}
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={90}
                size='xs'
                colorScheme='whatsapp'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                React, Next.js{" "}
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={90}
                size='xs'
                colorScheme='whatsapp'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                CSS3, Styled Components{" "}
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={90}
                size='xs'
                colorScheme='whatsapp'
              />
            </VStack>
          </Flex>

          <Flex
            w='100%'
            direction='column'
            justify='center'
            align='center'
            gap={"20px"}
          >
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Node.js, Mongodb
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={80}
                size='xs'
                colorScheme='yellow'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Graphql, Rest API
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={80}
                size='xs'
                colorScheme='yellow'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Apollo, React-query
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={80}
                size='xs'
                colorScheme='yellow'
              />
            </VStack>
          </Flex>

          <Flex
            w='100%'
            direction='column'
            justify='center'
            align='center'
            gap={"20px"}
          >
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Figma
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={80}
                size='xs'
                colorScheme='pink'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                After Effects, Blender
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={40}
                size='xs'
                colorScheme='pink'
              />
            </VStack>
            <VStack align='start' w='100%' spacing={1}>
              <Text
                fontWeight={700}
                color='#fff'
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Vue3
              </Text>
              <Progress
                isAnimated
                hasStripe
                w='100%'
                value={40}
                size='xs'
                colorScheme='pink'
              />
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
