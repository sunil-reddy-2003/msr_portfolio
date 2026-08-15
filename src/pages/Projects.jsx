import amazio from "../assets/amazio.png";
import fbs from "../assets/fbs.png";
import dashboard from "../assets/BlinkitDashboard.jpg";
import UI from "../assets/UI.png";

const Projects = () => {
  return (
    <div className="page-shell">

      <h1 className="section-heading">Projects</h1>

      <div className="projects-grid">

        <div className="glass-panel project-card">
          <img
            src={amazio}
            alt="Amazio – Full Stack E-Commerce Application"
            className="project-image"
          />
          <div className="project-body">
            <h2>
              Amazio – Full Stack E-Commerce Application
            </h2>
            <ul className="project-description list-disc list-inside">
              <li className="p-2">
                Built a full-stack e-commerce platform using React and Spring Boot with JWT-based authentication and role-based authorization.
              </li>
              <li className="px-2">
                Implemented secure REST APIs, order lifecycle management, admin product controls, and PostgreSQL integration following clean layered architecture.
              </li>
            </ul>
            <div className="technology-list">
              {["React.js", "React Router", "Context API", "Tailwind CSS", "Axios",
                "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL",
                "Maven", "Git", "Vercel", "Render"].map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
            </div>

            <div className="project-actions">
              <a
                href="https://amazio-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/sunil-reddy-2003/Amazio-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/sunil-reddy-2003/Amazio-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Backend Code
              </a>
            </div>
          </div>
        </div>
        <div className="glass-panel project-card">
          <img
            src={fbs}
            alt="Flight Booking System"
            className="project-image"
          />
          <div className="project-body">
            <h2>
              Flight Booking System
            </h2>
            <ul className="project-description list-disc list-inside">
              <li>Designed and developed a scalable microservices-based flight booking backend system using Spring Boot.</li>
              <li>Implemented JWT authentication, role-based access control, inter-service communication, and email notification workflows.</li>
            </ul>
            <div className="technology-list">
              {[
                "Spring Boot",
                "Microservices",
                "Spring Security",
                "JWT",
                "Thymeleaf",
                "JavaMailSender",
                "PostgreSQL",
              ].map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href="https://github.com/sunil-reddy-2003/flight-booking-system"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="glass-panel project-card">
          <img
            src={dashboard}
            className="project-image"
            alt="Blinkit Sales Dashboard"
          />
          <div className="project-body">
            <h2>
              Blinkit Sales Performance & Outlet Analytics Dashboard
            </h2>
            <ul className="project-description list-disc list-inside">
              <li>
                Developed an interactive Power BI dashboard to analyze Blinkit's sales performance, customer satisfaction, and outlet distribution patterns.
              </li>
              <li>
                The project focuses on identifying key business insights using KPI modeling, segmentation analysis, and data-driven visualization techniques.
              </li>
            </ul>
            <div className="technology-list">
              {["Python", "Power BI", "Pandas"].map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href="https://drive.google.com/file/d/1le7MDe5KcoVCtBLk3Wp9HgcDqPpwtQlL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="glass-panel project-card">
          <img src={UI} alt="MultiModal Information Retrieval System" className="project-image" />
          <div className="project-body">
            <h2>
              MultiModal Information Retrieval System
            </h2>
            <ul className="project-description list-disc list-inside">
              <li>Built a content-based retrieval system that finds similar images, audio clips, and videos using deep feature embeddings and vector similarity search.</li>
              <li>The system automatically detects the uploaded file type and retrieves the most semantically similar results from a pre-indexed dataset.</li>
            </ul>
            <div className="technology-list">
              {["Python", "PyTorch", "OpenCLIP", "CLAP", "FAISS", "OpenCV", "Torchaudio", "Gradio"].map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href="https://drive.google.com/drive/folders/13y_NMncSIl2qCSkC4d0ya8fQsrB2o5hp?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Code
              </a>
              <a
                href="https://drive.google.com/drive/folders/1h87soj4ZCjnwb0rt9iRXhkMmKXczm3mv?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
              >
                Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
