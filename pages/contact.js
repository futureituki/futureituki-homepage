import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { IoIosContact } from "react-icons/io";
import {
  Input,
  Heading,
  HStack,
  Stack,
  FormLabel,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import Section from "../components/section";
const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  return (
    <>
      <Section>
        <HStack>
          <Heading fontSize={32}>Contact</Heading>
          <IoIosContact fontSize={32} />
        </HStack>
        <form
          action="https://getform.io/f/92bed40b-f232-4fd2-a2c8-a85427af0782"
          method="POST"
        >
          <Stack mb={8} mt={8}>
            <FormLabel>Name</FormLabel>
            <Input required {...register("name")} />
            <Text color="red">
              <ErrorMessage color="red" errors={errors} name="name" />
            </Text>
          </Stack>
          <Stack mb={8} mt={8}>
            <FormLabel>Email</FormLabel>
            <Input
              required
              {...register("email", {
                maxLength: 60,
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "メールアドレスの形式が不正です",
                },
              })}
            />
            <Text color="red">
              <ErrorMessage errors={errors} name="email" />
            </Text>
          </Stack>
          <Stack mb={8} mt={8}>
            <FormLabel>Content</FormLabel>
            <Textarea
              required
              {...register("content", {
                maxLength: 300,
                pattern: {
                  value: "",
                  message: "100文字以上入力してください",
                },
              })}
            />
            <ErrorMessage errors={errors} name="content" />
          </Stack>
          <Button bg="gray.200" type="submit">
            Submit
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Contact;
