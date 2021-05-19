import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        < NavBar /> 
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
