import About from "@/components/About";
import Athletics from "@/components/Athletics";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Management from "@/components/Management";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Athletics />
      <Management />
    </main>
  );
}
