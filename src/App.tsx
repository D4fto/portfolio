import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useScrollSpy } from './hooks/useCustomHooks';
import { sendAnalytics, preloadProjects } from './utils/helpers';
import './styles/App.css';

function App() {
  const activeSection = useScrollSpy(['about', 'destaque', 'projetos', 'contato']);
  const hasSentAnalytics = useRef(false);

  useEffect(() => {
    if (hasSentAnalytics.current) return;
    hasSentAnalytics.current = true;

    sendAnalytics();

    // Preload projects
    preloadProjects();
    
    // Set up interval for preloading
    const interval = setInterval(() => {
      preloadProjects();
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-950 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
