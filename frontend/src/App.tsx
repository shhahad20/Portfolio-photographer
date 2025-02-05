import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ShowCases from "./components/ShowCases";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Works/>
      {/* <ShowCases/> */}
    </>
  );
}

export default App;
