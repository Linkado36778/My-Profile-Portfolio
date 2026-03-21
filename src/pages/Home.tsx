import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="max-w-5xl w-full px-6 py-12 flex flex-col gap-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Projects />
      </div>
    </main>
  );
}
