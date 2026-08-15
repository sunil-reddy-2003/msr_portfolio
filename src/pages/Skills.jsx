const Skills = () => {
    return (
        <div className="page-shell">

            <h1 className="section-heading">
                Technical Skills
            </h1>

            <div className="skills-grid">

                <div className="glass-panel skill-card">
                    <h2>
                        Programming Languages
                    </h2>
                    <div>
                        <p>Java</p>
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>C Programming</p>
                        <p>SQL</p>
                    </div>
                </div>

                <div className="glass-panel skill-card">
                    <h2>
                        Frontend Development
                    </h2>
                    <div>
                        <p>React</p>
                        <p>Tailwind CSS</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className="glass-panel skill-card">
                    <h2>
                        Backend Development
                    </h2>
                    <div>
                        <p>Spring Boot</p>
                        <p>Spring Security</p>
                        <p>Spring MVC</p>
                        <p>Microservices</p>
                        <p>JWT</p>
                    </div>
                </div>

                <div className="glass-panel skill-card">
                    <h2>
                        CS Fundamentals
                    </h2>
                    <div>
                        <p>Data Structures & Algorithms</p>
                        <p>OOP</p>
                        <p>DBMS</p>
                        <p>Operating Systems</p>
                    </div>
                </div>

                <div className="glass-panel skill-card">
                    <h2>
                        Databases 
                    </h2>
                    <div>
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                    </div>
                </div>
                <div className="glass-panel skill-card">
                    <h2>
                        Tools
                    </h2>
                    <div>
                        <p>Git / Github</p>
                        <p>Postman</p>
                        <p>Vercel</p>
                        <p>Render</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
