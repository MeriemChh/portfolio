import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../styles/DropdownHeader.css';

function DropdownHeader() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(false);

  const handleServiceClick = (e) => {
    setBubble(true);
    setTimeout(() => setBubble(false), 2000); // Disappear after 2 seconds
  };

  return (
    <div className="dropdown-header-wrapper">
      <header className="dropdown-header" onClick={() => setShow(!show)}>
        {show ? <FiChevronUp className="dropdown-icon" /> : <FiChevronDown className="dropdown-icon" />}
      </header>

      {show && (
        <div className="dropdown-content">
          <nav className="dropdown-nav">
            <a href="#projects">My Projects</a>
            <a href="#services" onClick={handleServiceClick}>My Services</a>
            <a href="#about">About Me</a>
          </nav>
        </div>
      )}

      {bubble && (
        <div className="coming-soon-bubble">
          🔧 Service page coming soon...
        </div>
      )}
    </div>
  );
}

export default DropdownHeader;
