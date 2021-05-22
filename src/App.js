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

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
