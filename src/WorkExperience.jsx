function WorkExperience ({ experience }) {
    var end = "Present"
    if (experience.date_end !== "") {
      end = experience.date_end
    }
  
    // Map all of the details into a list

  
    return (
      <div className="WorkExperience">
        <div className='WorkTopLine'>
          <h2 className='WorkCompany'>{experience.company}</h2>
          <i className='WorkDate'>{experience.date_start} - {end}</i>
        </div>
        <div className='WorkBody'>
          <div className='WorkSecondLine'>
            <h3 className='WorkTitle'>{experience.title}</h3>
            <i className='WorkLocation'>{experience.location}</i>
          </div>
          <p className='WorkDescription'>{experience.description}</p>
        </div>

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