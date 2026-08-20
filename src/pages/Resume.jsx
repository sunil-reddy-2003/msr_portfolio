const education = [
  {
    institution: "Vellore Institute of Technology, Vellore",
    detail: "Integrated M.Tech in Computer Science and Engineering, CGPA: 8.38/10",
    year: "2021 – 2026",
  },
  {
    institution: "Narayana Junior College, Hyderabad",
    detail: "Higher Secondary Education, GPA: 9.78/10",
    year: "2019 – 2021",
  },
  {
    institution: "St. Anne’s High School, Nalgonda",
    detail: "Matriculation, GPA: 9.8/10",
    year: "2018 – 2019",
  },
];

const skills = [
  ["Programming Languages", "Java, JavaScript, Python, C, SQL"],
  ["Frontend", "React.js, HTML, CSS, Tailwind CSS"],
  ["Backend", "Spring Boot, Spring MVC, Spring Security, Microservices, REST APIs, JWT"],
  ["Databases", "MySQL, PostgreSQL"],
  ["CS Fundamentals", "Data Structures and Algorithms, Object-Oriented Programming, DBMS, Operating Systems"],
  ["Machine Learning & Data", "Machine Learning, Deep Learning, Data Preprocessing, TensorFlow, Scikit-learn, NumPy, Pandas"],
  ["Data Analysis & Visualization", "Power BI, Tableau"],
  ["Tools & Platforms", "Git, GitHub, Postman, Vercel, Render"],
];

const projects = [
  {
    title: "Amazio – Full Stack E-Commerce Application",
    date: "March 2026",
    points: [
      "Built a full stack e-commerce platform with JWT based authentication and role access.",
      "Designed REST APIs in Spring Boot backed by PostgreSQL, integrated with React frontend.",
    ],
    tech: "React.js, Spring Boot, Spring Security, JWT, PostgreSQL, Tailwind CSS, REST APIs, Axios",
  },
  {
    title: "Flight Booking System (Backend – Microservices)",
    date: "Nov 2025",
    points: [
      "Built a microservices backend with role based access and secure JWT authentication.",
      "Set up automated email notifications using Thymeleaf templates and JavaMailSender.",
    ],
    tech: "Spring Boot, Microservices, Spring Security, JWT, Thymeleaf, JavaMailSender, PostgreSQL",
  },
  {
    title: "Multimodal Content Based Information Retrieval System",
    date: "Dec 2025",
    points: [
      "Built a retrieval system finding similar images, audio, and videos using deep embeddings.",
      "Implemented feature extraction pipelines and FAISS indexing for fast top-K similarity search.",
    ],
    tech: "Python, OpenCLIP, CLAP, FAISS, OpenCV, Gradio",
  },
  {
    title: "Blinkit Sales Performance and Outlet Analytics Dashboard",
    date: "Sep 2025",
    points: [
      "Built a Power BI dashboard tracking key sales KPIs across Blinkit’s outlets.",
      "Segmented data by product and location to identify top and lagging performers.",
    ],
    tech: "Python, Power BI, Pandas",
  },
];

const ResumeSection = ({ title, children }) => (
  <section className="resume-section">
    <h2>{title}</h2>
    {children}
  </section>
);

const Resume = () => {
  return (
    <main className="resume-page">
      <div className="resume-scaler">
        <article className="resume-document" aria-label="Sunil Reddy Mandadi resume">
        <header className="resume-header">
          <h1>Sunil Reddy Mandadi</h1>
          <p className="resume-contact">
            <a href="mailto:sunilreddymandadi@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true" /> sunilreddymandadi@gmail.com</a>
            <a href="tel:+919494999410"><i className="fa-solid fa-phone" aria-hidden="true" /> +91-9494999410</a>
            <a href="https://www.linkedin.com/in/sunilreddy2003" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true" /> sunil-reddy</a>
            <a href="https://github.com/sunil-reddy-2003" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true" /> sunil-reddy</a>
            <a href="/" aria-label="Open portfolio home"><i className="fa-solid fa-briefcase" aria-hidden="true" /> portfolio</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Nalgonda%2C+India" target="_blank" rel="noreferrer"><i className="fa-solid fa-location-dot" aria-hidden="true" /> Nalgonda, India</a>
          </p>
        </header>

        <ResumeSection title="Profile Summary">
          <p className="resume-summary">
            Full stack developer with strong backend skills in Java, Spring Boot, and PostgreSQL, and academic exposure to React for frontend development. Comfortable across the stack, from database design to deployment, with exposure to deep learning for retrieval systems. Adapts quickly and delivers reliable work.
          </p>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="resume-education">
            {education.map((item) => (
              <li key={item.institution}>
                <div>
                  <strong>{item.institution}</strong>
                  <p>{item.detail}</p>
                </div>
                <time>{item.year}</time>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <ul className="resume-skills">
            {skills.map(([category, value]) => (
              <li key={category}><strong>{category}:</strong> {value}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="resume-projects">
            {projects.map((project) => (
              <section className="resume-project" key={project.title}>
                <div className="resume-project-heading">
                  <h3>{project.title}</h3>
                  <time>{project.date}</time>
                </div>
                <ul>
                  {project.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <p><strong>Tech stack:</strong> {project.tech}</p>
              </section>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Certifications & Additional Information">
          <ul className="resume-additional">
            <li><strong>Certifications:</strong> Microsoft Azure AI Fundamentals</li>
            <li><strong>Hobbies & Interests:</strong> Full Stack Application Development, Coding, Traveling</li>
          </ul>
        </ResumeSection>
          <a
            className="resume-download"
            href="/Sunil%20Reddy%20M.pdf"
            download="Sunil-Reddy-Mandadi-Resume.pdf"
            aria-label="Download Sunil Reddy Mandadi resume as a PDF"
          >
            <i className="fa-solid fa-download" aria-hidden="true" />
            <span>Download Resume</span>
          </a>
        </article>
      </div>
    </main>
  );
};

export default Resume;