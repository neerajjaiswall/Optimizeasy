import React from "react";
import web from "../src/images/web.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
        <Common
        para1="Learn and Grow with"
        para2="We are proudly teaching competitive programming topics with
        experts and empowering the world."
        imgsrc={web}
        btname="Get Started"
        visit="/contact"
      />
    </>
  );
};

export default Home;
