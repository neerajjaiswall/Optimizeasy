import { Box, Flex, Link, Text } from "@chakra-ui/react";
// import logo from "./../logo.svg";
// import "./style.css";
// import theme from "../theme"
// import { useColorMode, ColorModeScript } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   )
// }

function NavBar() {
  return (
    <Box backgroundColor="#d0f4e4">
      <Flex justify="space-between" py={5}>
        {/* <img src={logo} alt="logo" width="100px" height="100px" /> */}
        <Text fontSize="lg" fontWeight="bold">
          CP Portal
        </Text>
        <Link href="#">
          Home
        </Link>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        < ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
}

export default NavBar;
