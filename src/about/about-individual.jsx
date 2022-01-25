import React from 'react'

const AboutIndividual = ({ image, name, description }) => {
  return (
    <div className='about--content'>
      <div className='grid grid-1x2'>
        <img className='about-photo' src={image}></img>
        <span className='about-group'>
          <p className='sub-title'>{name}</p>
          <p className='about-description'>{description}</p>
        </span>
      </div>
    </div>
  )
}

export default AboutIndividual
