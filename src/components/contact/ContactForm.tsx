import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

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
          <FormLabel>Name</FormLabel>
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
          <FormLabel>Email address</FormLabel>
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
          <FormLabel>Message</FormLabel>
          <Textarea
            isRequired
            name='message'
            color='#4831d4'
            variant='ghost'
            resize='none'
            placeholder='Here is a sample placeholder'
            size='sm'
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />
        </FormControl>
        <Input
          borderColor='#4831d4'
          color='#4831d4'
          mt='12px'
          variant='outline'
          leftIcon={<BsFillSendFill size={16} />}
          _hover={{ bg: "#4831d4", color: "#fff" }}
          as={Button}
          type='submit'
          value='Send'
          bg='transparent'
          isLoading={isSubmitting}
          size={"sm"}
        >
          Send
        </Input>
      </form>
    </Flex>
  );
};
