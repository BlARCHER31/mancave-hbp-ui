import React from 'react'
import './contact.css'
import Form from '../form/contact-form'
import Map from '../google-map/google-map'

const Contact = () => {
  return (
    <div id='contact' className='container'>
      <h3 className='title'>Contact Us</h3>
      <div className='grid-2x1'>
        <Form />
        <Map />
      </div>
    </div>
  )
}

export default Contact
