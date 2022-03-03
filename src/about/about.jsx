import React from 'react'
import cassImage from './about-images/cass-head-shot.JPG'
import livImage from './about-images/liv-head-shot.JPG'
import AboutIndividual from './about-individual'
import './about.css'

const cassDescription = `Hey guys, I'm Cassidy! I'm 26 years old and I was born and raised in Southern California. 
                        I moved to Middle Tennessee when I was 22. I have been in and around the industry since I was 
                        born growing up in my mom's salon. I got my barber license when I was 20 years old and have been cutting 
                        hair ever since. I specialize in straight razor fades, beard trims, and shaves. My priority is to always
                        have you walking out confident and looking like your best you. I do this by listening to what you want and 
                        guiding you with my expertise on how to get there. I can't wait for you to come in and see the new place. Thank you
                        so much for tagging along with us on our journey! Now let's cut your hair and make you feel like your best self!`

const oliviaDescription = `As a 3rd generation cosmetologist, I grew up in the hair and beauty industry and have 
                          always had a love for this profession. About 5 years ago, I grew a deeper passion for men's 
                          grooming while living in Colorado Springs working near the Peterson Air 
                          Force base where I became inspired to learn how to perfect
                          men's hair cuts. For 8 years now, I have been dedicated to developing a partnership with my clients to 
                          gain a deeper understanding of what they are aiming to achieve. With this mindset, 
                          I have been led to the next step, in my career, by offering these services as a local small 
                          business owner of "The ManCave". I am so excited to continue this journey with every
                          person who walks through our doors. I aim to provide only the finest haircuts, scalp massages, 
                          hot towel & shave, and of course beard trims.  paired with a cold beverage. 
                          I am so thankful that we are able to create this space for you to kick back, relax and walk 
                          away feeling more confident. I look forward to your appointment in the ManCave.`

const About = () => {
  return (
    <div id='about' className=' container about'>
      <div className='container'>
        <h1 className='title'>About</h1>
        <AboutIndividual
          image={cassImage}
          name={'Cassidy Elliot'}
          description={cassDescription}
        />
        <AboutIndividual
          image={livImage}
          name={'Olivia Beaumont'}
          description={oliviaDescription}
        />
      </div>
    </div>
  )
}

export default About
