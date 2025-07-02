import { useState } from 'react';
import '../styles/ProjectsSection.css';

function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="projects" id="projects">
      <h2 className='projects-title'>My Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="other-box">
            <div className="left">
              <img
                src="./darklogo-iphone.png"
                alt="Dawaee logo"
                className="icon"
              />
            </div>
            <div className="right">
              <h3>Dawaee</h3>
              <p>
                A medication tracking web application that helps users find the right pharmacies near them.
              </p>

              <button
                className="learn-more-button"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? 'Show Less' : 'Learn More'}
              </button>

              {showMore && (
                <div className="more-details">
                  <p>
                    🧠 <strong>Biggest Fullstack Project to Date</strong><br />
                    🎓 <strong>My Graduation Project</strong><br />
                    ⚙️ <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Mongoose, JWT, and more.<br />
                    🧪 Designed for real-world use with pharmacy account types, medication stock, geolocation, and authentication.
                  </p>
                </div>
              )}
              
              <button
                className='led-button'
                onClick={() => window.open('https://dawaee-dz.vercel.app', '_blank')}
              >
                Visit Dawaee
              </button>
            </div>
          </div>
        </div>

        <div className="project-card">
          <h3>Portfolio Templates</h3>
          <p>
            Responsive portfolio templates built for students, freelancers, artists, and professionals to showcase their work.
          </p>
          <button className='led-button' disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
