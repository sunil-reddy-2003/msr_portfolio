import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page-shell">
      <h1 className="section-heading">Get In Touch</h1>

      <div className="contact-grid">
        <a
          href="mailto:sunilreddymandadi@gmail.com"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-regular fa-envelope" aria-hidden="true" />
          <h1 className="break-all">sunilreddymandadi@gmail.com</h1>
        </a>

        <a
          href="https://www.linkedin.com/in/sunilreddy2003"
          target="_blank"
          rel="noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          <h1>Let’s connect professionally</h1>
        </a>

        <a
          href="https://github.com/sunil-reddy-2003"
          target="_blank"
          rel="noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-brands fa-github" aria-hidden="true" />
          <h1>Explore my projects &amp; code</h1>
        </a>

        <a
          href="tel:+919494999410"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-phone" aria-hidden="true" />
          <h1>Let’s talk</h1>
        </a>

        <Link
          to="/resume"
          target="_blank"
          rel="noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-file-lines" aria-hidden="true" />
          <h1>View Resume</h1>
        </Link>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Nalgonda%2C+India"
          target="_blank"
          rel="noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          <h1>Nalgonda, India</h1>
        </a>
      </div>

      <div className="contact-closing">
        Let’s connect and build something impactful.
      </div>
    </div>
  );
};

export default Contact;