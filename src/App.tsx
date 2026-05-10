import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Authors from './components/Authors';
import Headlines from './components/Headlines';
import Interviews from './components/Interviews';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import WhyClassics from './components/WhyClassics';
import Footer from './components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #641220, #C62828, #E53935)',
      }}
    />
  );
}

export default function App() {
  return (
    <div className="relative bg-[#050505] min-h-screen overflow-hidden">
      {/* <div className="noise-overlay" /> */}
      {/* <ScrollProgress /> */}

      {/* Ambient background orbs */}
      {/*<div className="fixed top-[30%] left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[180px] bg-wine pointer-events-none" />*/}
      {/*<div className="fixed top-[60%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[150px] bg-red-accent pointer-events-none" />*/}

      <Hero />
      <About />
      <Authors />
      <Headlines />
      <Interviews />
      <Timeline />
      <Gallery />
      <WhyClassics />
      <Footer />
    </div>
  );
}
