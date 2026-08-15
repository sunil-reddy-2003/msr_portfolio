const Contact = () => {
  return (
    <div className="page-shell">

      <h1 className="section-heading">
        Get In Touch
      </h1>

      <div className="contact-grid">

        <a
          href="mailto:sunilreddymandadi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-regular fa-envelope"></i>
          <h1 className="break-all">
            sunilreddymandadi@gmail.com
          </h1>
        </a>

        <a
          href="https://www.linkedin.com/in/sunilreddy2003"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-brands fa-linkedin-in"></i>
          <h1>
            Let’s connect professionally
          </h1>
        </a>

        <a
          href="https://github.com/sunil-reddy-2003"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-brands fa-github"></i>
          <h1>
            Explore my projects & code
          </h1>
        </a>

        <div
          className="glass-panel contact-card flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-map-pin"></i>
          <h1>
            Telangana, India
          </h1>
        </div>

      </div>

      <div className="contact-closing">
        Let’s connect and build something impactful.
      </div>

    </div>
  );
};

export default Contact;
