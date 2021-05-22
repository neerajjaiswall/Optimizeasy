import React from 'react';
// import "./App.css";
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Footer from './components/footer';
import Courses from "./Courses";

const App = () => {
	return (
		<BrowserRouter>
			<ChakraProvider>
			<Navbar/>
			<Switch>
				<Route exact path = "/" component = {Home} />
				<Route exact path = "/contact" component = {Contact} />
				<Route exact path = "/about" component = {About} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/courses' component={Courses} />
				<Redirect to = "/" />
			</Switch>
			<Footer />
			</ChakraProvider>
		</BrowserRouter>
	);
};

export default App;