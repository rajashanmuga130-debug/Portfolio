import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LenisProvider from './components/LenisProvider';
import CustomCursor from './components/CustomCursor';
import CinematicVideo from './components/CinematicVideo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import LearningRoadmap from './components/sections/LearningRoadmap';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// Standalone Pages
import ProjectDetail from './components/ProjectDetail';

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) {
        setPct((el.scrollTop / total) * 100);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <LearningRoadmap />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <LenisProvider>
      <CustomCursor />
      <CinematicVideo />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </LenisProvider>
  );
}
