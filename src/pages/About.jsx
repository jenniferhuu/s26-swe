function About() {
  return (
    <section>
      <h1>About Me</h1>

      <div className="about-card">
        <h2>Education</h2>
        <p>
          I am currently a rising junior at UC Berkeley, where I am building my skills
          in programming, data analysis, problem-solving, and machine learning.
        </p>
      </div>

      <div className="about-card">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Experience & Interests</h2>
        <p>
          I enjoy creating projects that combine clean design with useful
          functionality. I am interested in software development, data,
          finance, and building tools that help people solve problems.
        </p>
      </div>
    </section>
  );
}

export default About;