import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
