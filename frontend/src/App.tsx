import "./App.css";
import About from "./components/About";
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
    </>
  );
}

export default App;
