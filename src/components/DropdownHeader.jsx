import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../styles/DropdownHeader.css';

function DropdownHeader() {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown-header-wrapper">
      <header className="dropdown-header" onClick={() => setShow(!show)}>
        {show ? <FiChevronUp className="dropdown-icon" /> : <FiChevronDown className="dropdown-icon" />}
      </header>

      {show && (
        <div className="dropdown-content">
          <nav className="dropdown-nav">
            <a href="#projects">My Projects</a>
            <a href="#services">My Services</a>
            <a href="#contact">Contact Me</a>
          </nav>
        </div>
      )}

    </div>
  );
}

export default DropdownHeader;
