import React from 'react'
import cassImage from './about-images/temp-barber-photo.jpg'
import AboutIndividual from './about-individual'
import './about.css'

const cassDescription = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Dignissimos dolor corrupti voluptatem veniam omnis sunt amet
inventore animi sint ut, quod, autem vel repudiandae rerum ipsum,
totam eum adipisci? Voluptates quas reiciendis et neque tenetur
quos animi libero eligendi molestias vitae adipisci beatae
obcaecati ullam veniam labore distinctio facere quidem aspernatur
iste minus explicabo architecto, molestiae impedit voluptate!
Inventore praesentium asperiores omnis, necessitatibus,
voluptatibus iure nisi dolorem modi temporibus animi, repellat
architecto! Enim, qui. Voluptate dicta delectus fugiat error
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
corrupti nihil in dolorum. Veniam omnis voluptas quibusdam. Atque
dolor alias delectus amet dolores qui, consequatur ullam. Ratione
eos vel repellat unde, veniam fugit explicabo, commodi
consequuntur itaque assumenda fugiat ut exercitationem perferendis
nemo at autem culpa, alias officiis mollitia labore.`

const oliviaDescription = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Dignissimos dolor corrupti voluptatem veniam omnis sunt amet
inventore animi sint ut, quod, autem vel repudiandae rerum ipsum,
totam eum adipisci? Voluptates quas reiciendis et neque tenetur
quos animi libero eligendi molestias vitae adipisci beatae
obcaecati ullam veniam labore distinctio facere quidem aspernatur
iste minus explicabo architecto, molestiae impedit voluptate!
Inventore praesentium asperiores omnis, necessitatibus,
voluptatibus iure nisi dolorem modi temporibus animi, repellat
architecto! Enim, qui. Voluptate dicta delectus fugiat error
officia. <br></br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
corrupti nihil in dolorum. Veniam omnis voluptas quibusdam. Atque
dolor alias delectus amet dolores qui, consequatur ullam. Ratione
eos vel repellat unde, veniam fugit explicabo, commodi
consequuntur itaque assumenda fugiat ut exercitationem perferendis
nemo at autem culpa, alias officiis mollitia labore.`

const About = () => {
  return (
    <div className='about'>
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
