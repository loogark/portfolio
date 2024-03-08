import { Flex, HStack, Link, StackDivider, Text } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { footerLinks } from "../../data";
import { useTranslation } from "../../hooks/useTranslation";

export const PersonalInfo = () => {
  const [translate] = useTranslation();

  return (
    <Flex
      width={{ base: "100%", lg: "50%" }}
      p='24px'
      direction='column'
      justify='start'
      align='center'
      gap={{ base: "8px", md: "25px", lg: "35px" }}
    >
      <HStack spacing='6px'>
        <MdOutlineLocationOn size={24} color='#4831d4' />
        <Text color='#4831d4' fontSize={{ base: "xs", md: "md", lg: "lg" }}>
          Paris, France
        </Text>
      </HStack>
      <HStack spacing='6px'>
        <MdOutlineLocalPhone color='#4831d4' size={24} />
        <Text color='#4831d4' fontSize={{ base: "xs", md: "md", lg: "lg" }}>
          06 03 21 89 31
        </Text>
      </HStack>
      <HStack spacing='6px'>
        <CiMail color='#4831d4' size={24} />
        <Text color='#4831d4' fontSize={{ base: "xs", md: "md", lg: "lg" }}>
          ragoolkrishnan.ram@gmail.com
        </Text>
      </HStack>
      <HStack
        gap='8px'
        wrap='wrap'
        justify='center'
        divider={<StackDivider borderColor='#4831d4' />}
      >
        {footerLinks.map((link, i) => {
          const { title, href, translationKey } = link;
          return (
            <Link
              href={href}
              isExternal
              color='#4831d4'
              fontSize={{ base: "xs", md: "md", lg: "lg" }}
              key={`f_${i}`}
            >
              {translate(title, translationKey as any)}
            </Link>
          );
        })}
      </HStack>
    </Flex>
  );
};
