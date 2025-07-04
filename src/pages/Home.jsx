import Herosection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/Home.css';
import Footer from '../components/Footer';
import RibbonHeader from '../components/DropdownHeader';            
import Services from '../components/Services';
import Contact from '../components/Contact';


function Home() {
  return (
    <div className="home">
      <RibbonHeader />
      <Herosection/>
      <ProjectsSection />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;
