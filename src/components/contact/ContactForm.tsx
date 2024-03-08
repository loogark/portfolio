import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useTranslation } from "../../hooks/useTranslation";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const [translate] = useTranslation();

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.persist();
    event.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID ?? "",
        import.meta.env.VITE_APP_TEMPLATE_ID ?? "",
        event.target as HTMLFormElement,
        import.meta.env.VITE_APP_PUBLIC_KEY ?? ""
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "I will get back to you as soon as possible",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Something went wrong, please try again later!",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    (event!.target as any).reset();
  };
  return (
    <Flex gap='12px' width={{ base: "100%", lg: "50%" }} direction='column'>
      <form onSubmit={sendEmail}>
        <FormControl>
          <FormLabel>{translate("Name", "labelName")}</FormLabel>
          <Input
            isRequired
            name='user_name'
            color='#4831d4'
            variant='ghost'
            placeholder='John doe'
            _placeholder={{ opacity: 0.4, color: "inherit" }}
            type='text'
          />
        </FormControl>
        <FormControl>
          <FormLabel mt='8px'>
            {translate("Email address", "labelEmail")}
          </FormLabel>
          <Input
            isRequired
            name='user_email'
            color='#4831d4'
            variant='ghost'
            placeholder='abc@gmail.com'
            type='email'
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel mt='8px'>{translate("Message", "labelMessage")}</FormLabel>
          <Textarea
            isRequired
            name='message'
            color='#4831d4'
            variant='ghost'
            resize='none'
            placeholder={translate(
              `Hello Ragool, This is the best portfolio i ever saw, lets talk money, you know something like that.`,
              "messagePlaceHolder"
            )}
            size='sm'
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />
        </FormControl>
        <Input
          borderColor='#4831d4'
          color='#4831d4'
          mt='12px'
          variant='outline'
          leftIcon={
            isSubmitting ? <Spinner size='sm' /> : <BsFillSendFill size={16} />
          }
          isDisabled={isSubmitting}
          _hover={{ bg: "#4831d4", color: "#fff" }}
          as={Button}
          type='submit'
          value='Send'
          bg='transparent'
          isLoading={isSubmitting}
          size={"sm"}
        >
          {translate("Send", "send")}
        </Input>
      </form>
    </Flex>
  );
};
