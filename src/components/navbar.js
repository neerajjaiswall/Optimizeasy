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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, } from "@chakra-ui/icons";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                {/* <Box w="30%" className="mb-4" textAlign="end"> */}
				
			
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
