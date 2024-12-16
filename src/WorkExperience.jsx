function WorkExperience ({ experience }) {
    var end = "Present"
    if (experience.date_end !== "") {
      end = experience.date_end
    }
  
    // Map all of the details into a list
    const details = experience.details.map((item) => <ul>{item}</ul>)
  
    return (
      <div className="WorkExperience">
        <h2>{experience.company}</h2>
        <i>{experience.date_start} - {end}</i>
        <p>{details}</p>
      </div>
    )
}
  
  function ProfessionalExperience ({ experiences }) {
    // Top level component for Professional Experience
    const mapped_experiences = experiences.map((e) => 
      <ul>
        <WorkExperience experience={e}/>
      </ul>)
  
    return (
      <div className="Section" id="professional_experience">
        <h1>Work Experience</h1>
        {mapped_experiences}
      </div>
    )
  
}

export default ProfessionalExperience