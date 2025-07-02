import '../styles/About.css';
import Profile from '../assets/profile.jpg'; 
import Activities from '../components/Activities';


function About() {
  return (
    <div className="about" id="about">
        <div className="about-bar">
                <img
                    src={Profile}
                    alt="Meriem profile"
                    className="hero-image"
                />

        </div>
    <div className="about-content">
        <h1>About Me</h1>

        <p className="about-intro">
          I'm Meriem Chakhoum, a passionate front-end developer who’s obsessed with clean UI, great UX, and building tools that make life easier. I love learning by doing, and I’m currently exploring full-stack development while working on my own startup.
         I specialize with Vite & React and have a strong foundation in JavaScript, HTML, and CSS. I’m always looking for new challenges and opportunities to grow my web development skills.     
        </p>
        <p> Age: 22y.o</p>
         <p>📍 Laghouat, Algeria</p>

       <div className="about-section">
  <h2>🎓 Education</h2>
  <ul>
    <li>
      <strong>Computer Science B.S.</strong> – Amar Thelidji University of Laghouat (2022 - 2025)<br />
      During my studies, I focused on Web Development, Software Engineering, and UX Design. The program challenged me to think logically, problem-solve efficiently, and continuously learn — especially as I transitioned into full-stack development and started building real-world apps.
    </li>
    <br />
    <li>
      <strong>English Literature & Language (2 years) </strong> – Amar Thelidji University of Laghouat (2020 - 2022)<br />
      Before switching to Computer Science, I pursued English as my first major. I excelled in communication, critical thinking, and academic writing — skills that still serve me well today. Although I chose to follow a more technical and challenging path, my time in the English department taught me clarity, precision, and confidence in self-expression.
    </li>
  </ul>
</div>


        <div className="about-section">
          <h2>🛠️ Skills</h2>
          <ul className="skills-list">
            <div className='glass-card'>React & Vite</div>
            <div className='glass-card'>JavaScript (ES6+)</div>
            <div className='glass-card'>HTML / CSS </div>
            <div className='glass-card'>Node.js & Express</div>
            <div className='glass-card'>MongoDB & Mongoose</div>
            <div className='glass-card'>Git / GitHub</div>
            <div className='glass-card'>Responsive Design</div>
            <div className='glass-card'>UX / UI Thinking</div>
          </ul>
        </div>

        <div className="about-section">
          <h2>🚀 My Startup Journey</h2>
          <div className="box">
            <img
                    src="./dawaee-01.png"
                    alt="Meriem profile"
                    className="logo"
                />
          <p>
            I'm the creator of <strong>Dawaee</strong> — a medication availability tracking platform that connects users with pharmacies. It's currently in development and built with a full MERN stack. My goal is to launch a tool that genuinely helps people in Algeria access medication faster and more reliably.
          </p></div>
        </div>


        <div className="about-section"> 
            <Activities />        
        </div>
      </div>
    </div>
  );
}

export default About;
