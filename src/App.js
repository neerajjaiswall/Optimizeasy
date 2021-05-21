// import "./App.css";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import NavBar from "./components/navbar";
// import Footer from "./components/footer";
// import Home from "./Home";
// import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <ChakraProvider>
//         <div className="App">
//           < NavBar /> 
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/dashboard' component={Dashboard} />
//           </Switch>
//           <Footer />
//         </div>
//       </ChakraProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from './components/footer';

const App = () => {
    return (
      <BrowserRouter>
       <ChakraProvider>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/contact" component = {Contact} />
          <Route exact path = "/about" component = {About} />
          <Redirect to = "/" />
        </Switch>
        <Footer />
         </ChakraProvider>
         </BrowserRouter>
    );
};

export default App;