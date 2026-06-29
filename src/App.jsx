import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ResearchQuestion from './components/ResearchQuestion.jsx';
import Dataset from './components/Dataset.jsx';
import Workflow from './components/Workflow.jsx';
import Prototype from './components/Prototype.jsx';
import WhyItHelps from './components/WhyItHelps.jsx';
import Papers from './components/Papers.jsx';
import Team from './components/Team.jsx';
import DashboardLink from './components/DashboardLink.jsx';
import Footer from './components/Footer.jsx';
import PapersPage from './pages/PapersPage.jsx';
import { useReveal } from './hooks/useReveal.js';

// Tiny hash router: route hashes start with "#/" (e.g. "#/papers"),
// while in-page anchors ("#about", "#team") are left to smooth-scroll.
function getRoute() {
  return window.location.hash.startsWith('#/papers') ? 'papers' : 'home';
}

function HomePage() {
  // Drives the CSS scroll-reveal animations on the landing page.
  useReveal();
  return (
    <main>
      <Hero />
      <About />
      <ResearchQuestion />
      <Dataset />
      <Workflow />
      <Prototype />
      <WhyItHelps />
      <Papers />
      <Team />
      <DashboardLink />
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute();
      setRoute(next);
      const hash = window.location.hash;
      if (next === 'papers') {
        // Jump to top when entering the papers page.
        window.scrollTo(0, 0);
      } else if (hash && !hash.startsWith('#/')) {
        // Returning to the landing via an in-page anchor (e.g. from the papers
        // page): the target only exists after HomePage mounts, so scroll once
        // it's painted.
        requestAnimationFrame(() => {
          document.querySelector(hash)?.scrollIntoView();
        });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      <Navbar />
      {route === 'papers' ? <PapersPage /> : <HomePage />}
      <Footer />
    </>
  );
}
