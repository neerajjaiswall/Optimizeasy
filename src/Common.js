import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.png";

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
  SimpleGrid,
  Heading,
  Center,
  Text,
  Image,
  src,
  isNotSmallerScreen,
} from "@chakra-ui/react";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 py-5 py-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.para1}{" "}
                    <strong className="brand-name">
                      {" "}
                      <br /> CP Portal{" "}
                    </strong>
                  </h1>
                  <h2 className="my-3">{props.para2}</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Flex direction ={isNotSmallerScreen ? "column" : "row"} spacing={20} p = {isNotSmallerScreen ? "30" : "0"}align="center">
        <Box bg="red" height="700px" pt={200} width="50%">
          <Text fontSize="5xl" pl={120} fontWeight="bold">
            {" "}
            Learn and Grow with{" "}
          </Text>
          <Text fontSize="5xl" pl={120} fontWeight="bold" color="#3498DB">
            CP Portal
          </Text>

          <Text fontSize="2xl" pl={120} pt={3}>
            We are proudly teaching competitive programming topics with experts
            and empowering the world.
          </Text>
        </Box>

        <Box bg="blue" height="700px" pt={200} width="50%">
          <Image
            boxSize="200px"
            src={"../src/images/web.png"}
            alt="Alt"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Common;
