import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ResearchQuestion from './components/ResearchQuestion.jsx';
import Dataset from './components/Dataset.jsx';
import Workflow from './components/Workflow.jsx';
import Prototype from './components/Prototype.jsx';
import WhyItHelps from './components/WhyItHelps.jsx';
import Team from './components/Team.jsx';
import DashboardLink from './components/DashboardLink.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  // Drives the CSS scroll-reveal animations once on mount.
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchQuestion />
        <Dataset />
        <Workflow />
        <Prototype />
        <WhyItHelps />
        <Team />
        <DashboardLink />
      </main>
      <Footer />
    </>
  );
}
