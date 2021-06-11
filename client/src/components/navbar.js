import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      history.push("/");
    }
  };

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
    }
  };

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Link href="/">
          <strong>CP Portal</strong>
        </Link>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
          <Flex alignItems={"center"}>
            {true ? (
              <Menu>
                <MenuButton as={Button} rounded={"full"} cursor={"pointer"}>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My Courses</MenuItem>
                  <MenuItem>Log Out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button>Login / Signup</Button>
            )}
          </Flex>
          <Button colorScheme="blue" onClick={onOpen}>
            Login or Sign up
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login or Sign Up</ModalHeader>
              <ModalCloseButton />

              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>Login</Tab>
                  <Tab>Sign Up</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box m={5}>
                      <form method="POST">
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input
                            ref={initialRef}
                            placeholder="abc@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Password</FormLabel>
                          <Input
                          type = "password"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormControl>
                      </form>
                    </Box>
                    <ModalFooter>
                      <Button
                        mt={2}
                        colorScheme="blue"
                        mr={3}
                        onClick={loginUser}
                      >
                        Login
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </TabPanel>
                  <TabPanel>
                    <Box m={5}>
                      <form method="POST" id="registration-form">
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
                      </form>
                    </Box>
                    <ModalFooter>
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
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalContent>
          </Modal>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
export default NavBar;
