import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { Input,Heading } from "@chakra-ui/react";
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
    <Heading></Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} />
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
        <button type="submit">Submit</button>
      </form>
    </Section>
    </>
  );
};

export default Contact;
