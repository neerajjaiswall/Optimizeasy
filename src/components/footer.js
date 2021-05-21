import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import logo from "./../logo.svg";
// import "./style.css";

const Footer = () => {
  return (
    <Box backgroundColor="#d0f4e4">
      <Flex justify="space-between" px={32} py={16}>
        <img src={logo} alt="logo" width="200px" height="100px" />
        <HStack spacing={8}>
          <IconButton
            color="#333333"
            backgroundColor="#d0f4e4"
            href="#"
            aria-label="LinkedIn"
            icon={<FiLinkedin fontSize="20px" />}
          />
          <IconButton
            color="#333333"
            backgroundColor="#d0f4e4"
            href="#"
            aria-label="GitHub"
            icon={<FiGithub fontSize="20px" />}
          />
          <IconButton
            color="#333333"
            backgroundColor="#d0f4e4"
            href="#"
            aria-label="Mail"
            icon={<FiMail fontSize="20px" color="#333333" />}
          />
        </HStack>
      </Flex>
      <Text color="#333333" className="text-center">&copy; 2021 CP Portal. All rights reserved.</Text>
    </Box>
  );
};
export default Footer;
