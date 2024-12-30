import {
  grey,
  purple
} from './assets/images'

import { useEffect, useState } from 'react'
const img_arr = [grey, purple]

function Image ({ img }) {
  
}

function Project ({ project }) {
    // Slider logic
    const [currentImg, setCurrentImg] = useState(0)
    const [prevImg, setPrevImg] = useState(0)
    const [imgAnims, setImgAnims] = useState([2].concat(new Array(img_arr.length - 1).fill(1))) // NOTE: Fix img logic

    
    // Edit anim Functions
    const updateAnimations = (idx, val) => {
      let currentAnims = imgAnims
      currentAnims[idx] = val
      setImgAnims(currentAnims)
    }
    // Making the images
    const imgs = img_arr.map((img, index) => 
      <img className="ProjectImage" src={img} anim_state={imgAnims[index]}></img>  
    )

    const incrementImage = () => {
      // Increment counter
      let i = currentImg
      if (i + 1 >= imgs.length) {
        i = 0
      } else {
        i = i + 1
      }
      updateAnimations(i, '2')
      updateAnimations(currentImg, '1')
      setPrevImg(currentImg)
      setCurrentImg(i)
  
    }

    const decrementImage = () => {
      // Increment counter
      let i = currentImg
      if (i - 1 < 0) {
        i = imgs.length - 1
      } else {
        i = i - 1
      }
      updateAnimations(currentImg, '1')
      updateAnimations(i, '3')
      setPrevImg(currentImg)
      setCurrentImg(i)
  
    }
    // Map all of the details into a list
    const skills = project.skills.map((skill) => <li>{skill}</li>)

    
    return (
      <div className="Project">
        <div className="ProjectTopLine">
          <h2 className="ProjectTitle">{project.title}</h2>
          <i className="ProjectDate">{project.date}</i>
        </div>
        <div className="ProjectBody">
          <div className="ProjectSkills">
            <ul><i>{skills}</i></ul>
          </div>
          <p className="ProjectDescription">{project.description}</p>
          <div className="ProjectImageContainer">
            {imgs}
            <button className="ProjectButton" id='pb_left' onClick={decrementImage}><div class='Arrow Left'></div></button>
            <button className="ProjectButton" id='pb_right' onClick={incrementImage}><div class='Arrow Right'></div></button>
          </div>
        </div>
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