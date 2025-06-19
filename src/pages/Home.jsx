import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-[100vh]">
      <SectionWrapper className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <Hero />
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <About />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <Projects />
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <Skills />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <Resume />
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <Contact />
      </SectionWrapper>
    </div>
  );
}
