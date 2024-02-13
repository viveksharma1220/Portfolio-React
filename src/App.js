import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/about/Skills";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
