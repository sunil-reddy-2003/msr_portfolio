const EducationCard = ({ title, year, subtitle, score }) => {
    return (
        <div className="glass-panel education-card">
            <div>
                <div className="education-title">
                    {title}
                </div>

            <div className="education-detail">
                {subtitle}
            </div>

            <div className="education-score">
                {score}
            </div>
            </div>
            <div className="education-year">{year}</div>
        </div>
    );
};

const About = () => {
    return (
        <div className="page-shell">

            <section className="glass-panel intro-panel">

                <h1 className="section-heading">
                    About Me
                </h1>

                <p>
                    Computer Science student and full stack developer building scalable backend systems and modern web applications solving real-world problems.
                </p>

            </section>

            <section className="content-stack">

                <h1 className="section-heading">
                    Education
                </h1>

                <div className="education-list">
                <EducationCard
                    title="Vellore Institute of Technology, Vellore"
                    year="2021 – 2026"
                    subtitle="Integrated M.Tech in Computer Science and Engineering"
                    score="CGPA : 8.38/10"
                />

                <EducationCard
                    title="Narayana Junior College, Hyderabad"
                    year="2019 – 2021"
                    subtitle="Higher Secondary Education"
                    score="MARKS : 978/1000"
                />

                <EducationCard
                    title="St. Anne’s High School, Nalgonda"
                    year="2018 – 2019"
                    subtitle="Matriculation"
                    score="GPA : 9.8/10"
                />
                </div>
            </section>
        </div>
    );
};

export default About;
