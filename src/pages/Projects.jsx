const projects = [
  {
    title: "Weather App",
    description:
      "A React app that uses an API to display current weather, hourly forecasts, and weekly forecasts based on user location.",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A React game built with reusable components, state management, move history, and custom styling.",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive single-page application built with React and React Router to showcase projects, skills, and contact information.",
  },
];

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="section-intro">
        Here are a few projects I have worked on or am currently developing.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="small-button">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;