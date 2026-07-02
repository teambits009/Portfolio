import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Ledger from "@/components/Ledger";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Ledger />
      <About />
      <Competencies />
      <Projects />
      <Toolkit />
      <Contact />
    </>
  );
}
