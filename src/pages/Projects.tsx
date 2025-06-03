import "./Projects.css"

export const Projects = ()=>{
    const projects = [
        {
           name: "Todo List",
           github: "https://github.com/AmandaBalk/fed24s-the-last-todo-AmandaBalk",
           description: "This project is a modern todo list application built with React and TypeScript, featuring task creation, completion toggling, and storage using localStorage. It utilizes Vite and Tailwind CSS.",
           demo: "Todo-app.png"
        },
        {
           name: "Webshop",
          github: "https://github.com/AmandaBalk/bookish-webshop",
          description: "Bookish is a web shop for discovering and purchasing books online, built with TypeScript and styled using CSS. The project includes the use of REST APIs for data handling and features like user authentication, shopping cart management and responsive design. A team effort!",
          demo:"bookish.png"
        },
          {
           name: "Fetch Movies",
          github: "https://github.com/AmandaBalk/fetchMovies/tree/main",
          description: "This project is a TypeScript web application that allows users to search for movies using the OMDb API. It features a simple, responsive interface built with Vite, where users can enter a search term and view a list of matching movies, including their titles, posters, and IMDb IDs. The project demonstrates skills in TypeScript, API integration, and dynamic DOM manipulation!",
          demo:"fetchMovies.png"
        },
        
        {
           name: "Rock Paper Scissors Game",
            github: "https://github.com/AmandaBalk/rock-paper-scissors-game",
            description: "This project is a Rock-Paper-Scissors game built with TypeScript and Vite, featuring a modern web interface styled with CSS and interactive icons from Font Awesome. The game allows users to play against the computer, tracks scores, and dynamically updates the results in the browser. A team effort!",
            demo:"Game.png"
        },
          {
            name: "Nortech Agency App",
            github: "https://github.com/AmandaBalk/nortech-project",
            description: "This project is a web agency site built with TypeScript. It features interactive graphics and a responsive design. A team effort!",
            demo:"nortech.png"
        },
        {
            name: "Website",
            github: "https://github.com/AmandaBalk/website-project",
            description: "The first application I built. Using HTML5 and CSS, the website is responsive and features a mobile-friendly hamburger menu and an engaging hero section.",
            demo:"website.png"
        },
    ]
    return <>

<section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.name}</h3>
            <img className="demo" src={project.demo}></img>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <a className="github-more" href="https://github.com/AmandaBalk" target="_blank" rel="noopener noreferrer">Check out my GitHub for more code
</a>
    </section>
    </>
}