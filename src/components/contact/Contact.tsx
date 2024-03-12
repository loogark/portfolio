import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { ContactForm } from "./ContactForm";
import { PersonalInfo } from "./PersonalInfo";

export const Contact = () => {
  const [translate] = useTranslation();

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
        maxW='1300px'
        h='fit-content'
        direction='column'
      >
        <Heading
          color='#4831d4'
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem" }}
          letterSpacing='1.5px'
        >
          {translate("Get in touch with me", "getInTouch")}
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
          {translate(
            `Got a question or proposal, or just want to say hello? Go ahead, You
          can reach me through phone, email or book a meeting.`,
            "gotAQuestion"
          )}
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
