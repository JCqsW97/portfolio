import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";

function HomePage() {
  return (
    <div>
        <h1 className="flex justify-center">Thinking outside the box!</h1>
        <Hero />
        <About />
        <Projects />
    </div>
  )
};

export default HomePage;