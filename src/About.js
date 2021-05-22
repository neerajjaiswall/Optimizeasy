import React from "react";
import Common from "./Common";
import web from "../src/images/discuss.jpg";
const About = () => {
  return (
    <>
      <Common
        para1="About Us"
        para2="We are the team of professionals."
        imgsrc={web}
        btname="Contact Us"
        visit="/contact"
      />
    </>
  );
};

export default About;
