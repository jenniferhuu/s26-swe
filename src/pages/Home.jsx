import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <p className="eyebrow">Welcome to my portfolio</p>
        <h1>Hi, I'm Jennifer.</h1>
        <p>
          I am a student interested in technology, design, data, and building
          creative projects with code. This portfolio showcases some of my
          work, skills, and background.
        </p>

        <div className="button-group">
          <Link to="/projects" className="button primary">
            View Projects
          </Link>
          <Link to="/contact" className="button secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="avatar-card">
        <div className="avatar-circle">JH</div>
        <p>Student Developer</p>
      </div>
    </section>
  );
}

export default Home;