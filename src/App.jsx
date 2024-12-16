import { useState } from 'react'
import data from'./assets/data.json'
import './App.css';

import ProfessionalExperience from './WorkExperience'
import PersonalProjects from './PersonalProjects'

function Information ({ info }){
  return  (
    <div className="Section" id="information">
      <h1>{info.name}</h1>
      <p>{info.title}</p>
      <p>{info.school} : {info.degree}</p>
    </div>
  )
}

function NavBar ({ topics }) {
  const mapped_topics = topics.map((t) => 
    <li><a href={t.id}>{t.name}</a></li>
  )

  return (
    <div className='Nav'>
      <ul>
        {mapped_topics}
      </ul>
    </div>
  )
}

function App() {
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
