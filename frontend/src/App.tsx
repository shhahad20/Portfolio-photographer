import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Works/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
