import Herosection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import '../styles/Home.css';
import Footer from '../components/Footer';
import RibbonHeader from '../components/DropdownHeader';            


function Home() {
  return (
    <div className="home">
      <RibbonHeader />
      <Herosection/>
      <ProjectsSection />

      <Footer/>
    </div>
  );
}

export default Home;
