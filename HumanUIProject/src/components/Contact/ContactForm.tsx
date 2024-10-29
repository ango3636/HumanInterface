import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

interface Props {
  onSubmit: (data: contactFormData) => void;
}

const schema = z.object({
  title: z.string(),
  name: z.string(),
  phone: z.string(),
});

type contactFormData = z.infer<typeof schema>;

const ContactForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({ resolver: zodResolver(schema) });

  return (
    <FormControl margin={2} width="300px">
      <FormLabel> Title </FormLabel>
      <Input {...register("title")} id="title" type="string" />
      <FormLabel> Name </FormLabel>
      <Input {...register("name")} id="name" type="string" />
      <FormLabel> Phone </FormLabel>
      <Input {...register("phone")} id="phone" type="string" />
      <Button onClick={handleSubmit(onSubmit)} bg="cyan.600" marginTop={3}>
        Add Contact
      </Button>
    </FormControl>
  );
};

export default ContactForm;
