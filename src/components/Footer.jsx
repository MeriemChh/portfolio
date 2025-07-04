import '../styles/Footer.css';
import { FaWhatsapp,FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" >
      <div className="footer-links">
        <a href="https://github.com/MeriemChh" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/meriemc" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:meriemchakhoum@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/213558244890" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Meriem Chakhoum. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
