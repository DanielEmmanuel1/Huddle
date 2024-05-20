import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./About";
import Drive from "./Drive";
import HundleFeatures from "./Features";

function App() {
  return (
    <>
    <div className="py-[24px] bg-cover bg-center h-screen flex flex-col" style={{ backgroundImage: `url('./images/background.svg')` }}>
      <Navbar />
      <HeroSection/>
    </div>
    <AboutUs/>
    <Drive />
    <HundleFeatures />
    </>
  );
}

export default App;