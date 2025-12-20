import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skills/Skill";

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full">
     <Navbar />
     <Home />
     <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;