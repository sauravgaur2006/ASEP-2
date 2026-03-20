import Navbar from '../components/layout/Navbar';
import BackgroundCanvas from '../components/hero/BackgroundCanvas';
import Hero from '../components/hero/Hero';
import FeaturesSection from '../components/features/FeaturesSection';

const LandingPage = () => {
  return (
    <main className="relative min-h-screen">
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <FeaturesSection />
    </main>
  );
};

export default LandingPage;
