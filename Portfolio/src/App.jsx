import Hero from "./Components/Hero";
import styled from "styled-components";
import About from "./Components/About";
import Education from "./Components/Education";
import Experince from "./Components/Experince";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: None;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar {
    display: None;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Education />
      <Experince />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
