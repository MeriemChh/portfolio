import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/MeriemChh" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/meriemc" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="#contact">
          <FiMail /> Contact
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Meriem Chakhoum. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
