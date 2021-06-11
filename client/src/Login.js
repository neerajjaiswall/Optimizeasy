import React, { useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
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

const Login = () => {

const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState();

const loginUser = async(e) => {
  e.preventDefault();
  const res = await fetch('/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      email, 
      password
    })
  });

  const data = res.json();
  if(res.status ===400 || !data) {
    window.alert("Invalid Credentials");
  }
  else {
    window.alert("Login Successful");
    history.push("/");
  }
}

    return (
        <>
        <Box m={5}>
          <form method = "POST">
          <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input ref={initialRef} placeholder="abc@gmail.com" 
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="**********" 
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        />
                      </FormControl>
                      <Button mt={2} colorScheme="blue" mr={3} onClick = {loginUser}>
                        Login
                      </Button>
          </form>
        
        </Box>
                        
        </>
    );
};

export default Login;