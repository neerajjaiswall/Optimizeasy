import { Box, Flex, Link, Text } from "@chakra-ui/react";
// import logo from "./../logo.svg";
import { ColorModeSwitcher } from '../ColorModeSwitcher';

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   )
// }

// Refer: https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/

function NavBar() {
  return (
    <Box backgroundColor="lightseagreen" style="box-shadow: 0 2px 4px lightseagreen;">
      <Flex justify="space-between" py={5}>
        {/* <img src={logo} alt="logo" width="100px" height="100px" /> */}
        <Text fontSize="lg" fontWeight="bold">
          CP Portal
        </Text>
        <div className="navbar-nav mx-auto">
          <Link href={'/'} className="nav-link"> Home </Link>
          <Link href={'/dashboard'} className="nav-link"> Dashboard </Link>
          <Link href={'/cart'} className="nav-link"> Cart </Link>
          <Link href={'/profile'} className="nav-link"> Profile </Link>
        </div>
        < ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
}

export default NavBar;
