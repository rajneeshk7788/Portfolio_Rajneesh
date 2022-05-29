import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({experience}) => {
  let { link, company, img, title, info, stack } = experience
  return (
    <a
      className="experience-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card-wrapper">
        <div className="experience-card">
          {/* <div className="experience-card-top">
          </div> */}
          <div className="experience-card-bottom">
          <h2>{experience.pname}</h2>
            <div className="img1">
              <img src={experience.img} alt='images' width="300px" height='280px' /><br />
            </div>
            
            Click Here 
          </div>
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
