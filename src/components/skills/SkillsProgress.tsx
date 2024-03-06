import {
  Flex,
  Heading,
  Progress,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SkillsProgress = () => {
  return (
    <Flex
      as={motion.div}
      h='100%'
      p={{ base: "24px", md: "32px", lg: "64px" }}
      w='100%'
      direction='column'
      justify='center'
      align='center'
      gap='20px'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <Flex
        mt={{ base: "60px", md: "10px", lg: "60px" }}
        gap='8px'
        w='100%'
        direction='column'
        justify='start'
        align='start'
      >
        <Heading
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
          letterSpacing='1.5px'
          color='#4831d4'
        >
          Tech Skills
        </Heading>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color='white'>
          I bring a diverse skill set to web development, excelling in
          JavaScript, React, TypeScript, Node.js, MongoDB, Next.js, and Chakra
          UI. Proficient in crafting dynamic and scalable interfaces, I employ
          React Query for seamless state management and Styled Components for
          clean styling.
        </Text>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color='white'>
          On the server side, I leverage Node.js for robust applications,
          coupled with MongoDB for efficient data handling. Next.js optimizes
          performance and SEO, enhancing the overall user experience.
        </Text>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color='white'>
          My expertise extends to Apollo GraphQL and REST API development for
          efficient data querying and integration. Additionally, I streamline my
          workflow with Visual Studio Code.
        </Text>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color='white'>
          In summary, my skills enable me to contribute to creating
          feature-rich, technically sound web applications, emphasizing clean
          code and optimal development practices.{" "}
          <Link to='/projects' style={{ color: "#ccf381" }}>
            Check my skills at display here.
          </Link>
        </Text>
      </Flex>

      <SimpleGrid
        my={{ base: "24px", md: "32px", lg: "52px" }}
        w='100%'
        minChildWidth='30%'
        spacing='40px'
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
      </SimpleGrid>
    </Flex>
  );
};
