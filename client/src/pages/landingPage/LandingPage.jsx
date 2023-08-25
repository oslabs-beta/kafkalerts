import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
const LandingPage = () => {
  return (
    <div id='landing-page' className='pages'>
      <div id='main'>
        <Hero />
        <Features />
        <Team />
      </div>
    </div>
  );
};

export default LandingPage;
