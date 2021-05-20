import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./Home";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          < NavBar /> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
          <Footer />
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
