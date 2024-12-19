function Project ({ project }) {
    // Map all of the details into a list
    const skills = project.skills.map((skill) => <ul>{skill}</ul>)
    return (
      <div className="Project">
        <h2>{project.title}</h2>
        <p>{project.date}</p>
        <i>{skills}</i>
        <p>{project.description}</p>
      </div>
    )
}
  
  function PersonalProjects ({ projects }) {
    // Top level component for Personal Projects
    const mapped_projects = projects.map((p) => 
      <ul>
        <Project project={p} />
      </ul>)
  
    return (
      <div className="Section" id="personal_projects">
        <h1>Personal Projects</h1>
        {mapped_projects}
      </div>
    )
}

export default PersonalProjects