import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./About";
import Drive from "./Drive";
import HundleFeatures from "./Features";
import ProjectTimeline from "./ProjectTimeline";
import Footer from "./Footer";

function App() {
  return (
    <>
    <div className="bg-cover bg-center h-screen flex flex-col" style={{ backgroundImage: `url('./images/background.svg')` }}>
      <Navbar />
      <HeroSection/>
    </div>
    <AboutUs/>
    <Drive />
    <HundleFeatures />
    <ProjectTimeline/>
    <Footer />
    </>
  );
}

export default App;