import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import home from "../src/images/home.png";
import learn from "../src/images/learn.png";

const Home = () => {
  return (
    <Box backgroundColor="#F3FCF8">
      <Box display={{ md: "flex" }} px={10}>
        <Box w={{ md: "1/2" }}>
          <Box py="25%" px="10%">
            <Text fontSize={40}>Learn and Grow with </Text>
            <Text fontSize={60} color="#333333">
              CP Portal
            </Text>
            <Text fontSize={20}>
              We are proudly teaching competitive programming topics with
              experts and empowering the world.{" "}
            </Text>
          </Box>
        </Box>
        <Box>
          <Image src={home} alt="image" />
        </Box>
      </Box>
      <Box display={{ md: "flex" }} py={20} px={10}>
        <Box>
          <Image src={learn} alt="image" />
        </Box>
        <Box w={{ md: "1/2" }}>
          <Box py="10%" px="10%">
            <Heading>Why Learn Here</Heading>
            <Box backgroundColor="white" my={5} px={2}>
              <Text fontSize={30}>Low Cost</Text>
              <Text fontSize={20}>
                We provide course at very low price comparable to other online
                courses.{" "}
              </Text>
            </Box>
            <Box backgroundColor="white" my={5} px={2}>
              <Text fontSize={30}>Best Instructor</Text>
              <Text fontSize={20}>
                Instructors of our courses are best programmer in world with
                lots of experience.
              </Text>
            </Box>
            <Box backgroundColor="white" my={5} px={2}>
              <Text fontSize={30}>Learn topic wise topic</Text>
              <Text fontSize={20}>
                Our courses are dedicated over a single topic so that you can
                study different topics with different instructors.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
