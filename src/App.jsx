import { About } from "./components/About";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Services />
    </>
  );
}

export default App;
