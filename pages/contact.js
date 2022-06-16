import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { IoIosContact } from "react-icons/io";
import { Input, Heading, HStack, Stack, FormLabel, Textarea, Button } from "@chakra-ui/react";
import Section from "../components/section";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Section>
        <HStack>
          <Heading fontSize={32}>Contact</Heading>
          <IoIosContact fontSize={32} />
        </HStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack mb={8} mt={8}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name")} />
            <ErrorMessage errors={errors} name="name" />
          </Stack>
          <Stack mb={8} mt={8}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email", {
                required: true,
                maxLength: 60,
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "メールアドレスの形式が不正です",
                },
              })}
            />
          <ErrorMessage errors={errors} name="email" />
          </Stack>
          <Stack mb={8} mt={8}>
            <FormLabel>Content</FormLabel>
            <Textarea
              {...register("content", {
                required: true,
                maxLength: 300,
              })}
            />
          {/* <ErrorMessage errors={errors} name="content" /> */}
          </Stack>
          <Button bg="gray.200" type="submit">Submit</Button>
        </form>
      </Section>
    </>
  );
};

export default Contact;
