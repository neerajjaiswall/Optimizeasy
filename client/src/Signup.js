import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Lorem,
  ModalFooter,
  FormLabel,
  finalRef,
  initialRef,
  FormControl,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

// import User from '../../server/model/userSchema';

const Signup = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
    }
  };

  return (
    <>
      <Box m={5}>
        <form method = "POST" id = "registration-form">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            ref={initialRef}
            type="text"
            name="name"
            id="name"
            placeholder="ex: John Wick"
            value={user.name}
            onChange={handleInputs}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            value={user.email}
            onChange={handleInputs}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Phone</FormLabel>
          <Input
            type="number"
            name="phone"
            id="phone"
            placeholder="Mobile"
            value={user.phone}
            onChange={handleInputs}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            value={user.password}
            onChange={handleInputs}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="*******"
            value={user.cpassword}
            onChange={handleInputs}
          />
        </FormControl>
        <Button
          mt={2}
          colorScheme="blue"
          mr={3}
          type="submit"
          name="signup"
          id="signup"
          onClick={PostData}
        >
          Sign Up
        </Button>

        </form>
        </Box>
    </>
  );
};

export default Signup;
