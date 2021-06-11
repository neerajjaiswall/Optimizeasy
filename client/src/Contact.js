import React from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Center,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Center>
      <Box w="50%" my={20}>
        <Heading fontSize={20} textAlign="center" my={2}>
          Drop out your queries. We will reach out to you soon.
        </Heading>
        <Input my={2} placeholder="Name" />
        <Input my={2} placeholder="Email" />
        <Input my={2} placeholder="Mobile Number" />
        <Textarea my={2} placeholder="Enter your message" />

        <Button>Submit</Button>
      </Box>
    </Center>
  );
};

export default Contact;
