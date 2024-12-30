import { useState } from 'react'
import data from'./assets/data.json'
import './App.css';
import {
  Github,
  LinkedIn,
  Email
} from './assets/images'

import ProfessionalExperience from './WorkExperience'
import PersonalProjects from './PersonalProjects'

function Information ({ info }){
  return  (
    <div className="Section" id="information">
      <h1 id='name'>{info.name}</h1>
      <p id='title'>{info.title}</p>
      <div id='education'>
        <div id='school_info'>
          <p id='school_name'><b>{info.education.school}</b></p>
          <p id='degree'>{info.education.degree} </p>
          <p>GPA: {info.education.gpa}</p>
        </div>
        <div id='school_dates'>
          <p>{info.education.start} - {info.education.end}</p>
        </div>

      </div>
    </div>
  )
}

function NavBar ({ topics }) {
  const mapped_topics = topics.map((t) => 
    <li><a className='TextLink' href={t.id}>{t.name}</a></li>
  )

  return (
    <div className='Nav'>
      <div id='page_nav'>
        <ul>
          {mapped_topics}
          <div id='logos'>
            <li><a className='LogoLink' href="https://github.com/DannyMacha25"><img src={Github}/></a></li>
            <li><a className='LogoLink' href="https://www.linkedin.com/in/danny-machado-387468237/"><img src={LinkedIn}/></a></li>
            <li><a className='LogoLink' href="mailto:dannycunhamachado@gmail.com"><img src={Email}/></a></li>
          </div>
        </ul>
      </div>
      <div id='links'>
      </div>
    </div>
  )
}

function App() {
  document.title = 'Danny\'s Portfolio'
  const [count, setCount] = useState(0)
  const nav_bar_topics = [
    {
      "name" : "Information",
      "id" : "#information"
    },
    {
      "name" : "Experience",
      "id" : "#professional_experience"
    },
    {
      "name" : "Projects",
      "id" : "#personal_projects"
    }
  ]
  return (
      <div className="parent">
        <NavBar topics={nav_bar_topics}/>
        <Information info = {data.info}/>
        <ProfessionalExperience experiences={data.experience}/>
        <PersonalProjects projects={data.projects}/>
      </div>
  )
}

export default App
