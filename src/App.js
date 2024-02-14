import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/about/Skills";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
