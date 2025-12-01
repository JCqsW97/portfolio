import Hero from "../sections/Hero";
import About from "../sections/About";

function HomePage() {
  return (
    <div>
        <h1 className="flex justify-center">Thinking outside the box!</h1>
        <Hero />
        <About />
    </div>
  )
};

export default HomePage;