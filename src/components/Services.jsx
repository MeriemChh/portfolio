import React from "react";
import "../styles/Services.css";
import { FaLaptopCode, FaUser, FaCodeBranch } from "react-icons/fa";

const services = [
  {
    title: "Custom Web Apps (MERN Stack)",
    description: (
      <>
        I build full-featured web applications using <strong>MERN</strong>:
        MongoDB, Express.js, React.js, and Node.js. <br />
        Whether you need an ecommerce platform or internal dashboard — I design
        it from scratch to fit your goals. <br />
        <em>Fast, scalable, responsive.</em>
      </>
    ),
    icon: <FaLaptopCode />,
  },
  {
    title: "Modern Personal & Business Portfolios",
    description: (
      <>
        A clean and mobile-friendly portfolio site that reflects your unique
        identity or brand. <br />
        Built with <strong>React</strong>, styled to impress, and easily
        shareable. <br />
        <em>Perfect for professionals, creators, and startups.</em>
      </>
    ),
    icon: <FaUser />,
  },
  {
    title: "Team Collaboration on Web Projects",
    description: (
      <>
        I join teams or freelance projects as a frontend (React) or backend
        (Node/Express) developer. <br />
        I write clean, modular code, communicate clearly, and adapt fast. <br />
        <em>Need someone reliable on your team? Let’s connect.</em>
      </>
    ),
    icon: <FaCodeBranch />,
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-cta">
              Let’s Talk
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
