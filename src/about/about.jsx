import React from 'react'
import cassImage from './about-images/temp-barber-photo.jpg'
import AboutIndividual from './about-individual'
import './about.css'

const cassDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam aliquid similique neque vel non iste excepturi quis porro repudiandae accusamus perspiciatis perferendis animi obcaecati ea soluta est debitis id, saepe sapiente delectus. Placeat, fugiat nisi. Alias quasi suscipit aspernatur pariatur aperiam possimus perferendis rem tenetur necessitatibus expedita eveniet nihil, minus architecto, tempore temporibus magnam sequi in optio facere fugiat.`

const oliviaDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste quibusdam, temporibus beatae facere at fuga magni rem asperiores ea nesciunt ullam eius molestias accusamus necessitatibus tempora quod sapiente esse hic earum commodi? Dicta, architecto voluptates pariatur ea dolore asperiores numquam veritatis ex modi quod eius exercitationem, voluptatem tempora iste.`

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='container'>
        <h1 className='title'>About</h1>
        <AboutIndividual
          image={cassImage}
          name={'Cassidy'}
          description={cassDescription}
        />
        <AboutIndividual
          image={cassImage}
          name={'Olivia'}
          description={oliviaDescription}
        />
      </div>
    </div>
  )
}

export default About
