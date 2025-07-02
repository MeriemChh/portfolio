import '../styles/HeroSection.css';
import Profile from '../assets/profile.jpg'; 
import { useNavigate } from 'react-router-dom';
function HeroSection() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    return (
        <section className="hero" id='hero'>
            <div className="hero-content">
                <img
                    src={Profile}
                    alt="Meriem profile"
                    className="hero-image"
                />
                <h1>Hi, I'm Meriem</h1>
                <p className="subtitle">Web Developer & UX Enthusiast</p>
                <button className='glass-btn' onClick={handleAboutClick}>About Me</button>
            
          
            </div>
        </section>
    );
}

export default HeroSection;
