import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";
import Signup from "./Signup";
import Login from "./Login";


const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/courses/course-details" component={CourseDetails} />    {/* Placing this Route below /courses Route has caused Routing issue, by routing to same page as its parent directory /courses */}
          <Route path="/courses" component={Courses} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
