import profile from "../assets/sunil.png";
import TextType from "../components/TextType";
import TiltedCard from "../components/TiltedCard";


const Home = () => {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <h1 className="hero-eyebrow">
            <TextType
              text={["Hi, I'm Sunil Reddy"]}
              typingSpeed={75}
              pauseDuration={1500}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          <h2 className="hero-title">
            Full Stack <span>Developer</span>
          </h2>
          <div className="hero-description">
            I build secure, scalable backend systems with Spring Boot and microservices,
            and create responsive frontend applications that deliver real-world impact.
          </div>
          <div className="skill-line">
            Spring Boot • Microservices • React • SQL • JWT
          </div>
          <div className="hero-actions">
            <a
              className="primary-action"
              href="https://www.linkedin.com/in/sunilreddy2003"
              target="_blank"
            >
              View Linkedin
            </a>
            <a
              className="secondary-action"
              href="https://github.com/sunil-reddy-2003"
              target="_blank"
            >
              View Github
            </a>
          </div>
        </div>

        {/* <div className="profile-column">
        <div className="profile-frame">
          <img
          src={profile}
          alt="Sunil Reddy M"
          />
        </div>
      </div> */}
        <div className="profile-column">
          <TiltedCard
            imageSrc={profile}
            altText="Sunil Reddy M"
            captionText="Sunil Reddy M"
            containerHeight="420px"
            containerWidth="380px"
            imageHeight="400px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
