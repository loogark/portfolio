import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { PersonalInfo } from "./PersonalInfo";

export const Contact = () => {
  return (
    <Flex
      as={motion.div}
      justify='center'
      align='center'
      w='100%'
      h='100%'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <Flex
        p={{ base: "18px", md: "20px", lg: "34px" }}
        borderRadius='8px'
        bgColor='#ccf381'
        gap='12px'
        width={{ base: "90%", md: "80%", lg: "70%" }}
        h='fit-content'
        direction='column'
      >
        <Heading
          color='#4831d4'
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
          letterSpacing='1.5px'
        >
          Get in touch with me
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
          Got a question or proposal, or just want to say hello? Go ahead, You
          can reach me through phone, email or book a meeting.
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          wrap={"wrap"}
          width='100%'
          h='100%'
        >
          <ContactForm />
          <PersonalInfo />
        </Flex>
      </Flex>
    </Flex>
  );
};
