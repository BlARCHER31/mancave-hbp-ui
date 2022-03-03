import React from 'react'
import './contact.css'
import Form from '../form/contact-form'
import Map from '../google-map/google-map'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3 id='book' className='title'>
        Contact
      </h3>
      <div className='phone-numbers'>
        <p className='name'>You can call or text us to book an appointment!</p>
        <div className='grid-2x1'>
          <span>
            <p className='name'>Cassidy</p>
            <p className='number'>(951)-310-7930</p>
          </span>
          <span>
            <p className='name'>Olivia</p>
            <p className='number'>(615)-877-1318</p>
          </span>
        </div>
      </div>
      <div className='grid-2x1'>
        <Form />
        <Map />
      </div>
    </div>
  )
}

export default Contact
