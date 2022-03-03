import React from 'react'
import Button from '../button/button'
import './form.css'

const Form = () => {
  return (
    <div className='contact'>
      <form
        className='contact-form'
        action='https://formsubmit.co/themancavehbp2022@gmail.com'
        method='POST'
      >
        <label className='contact-label' htmlFor='name'>
          Name
        </label>
        <input
          className='contact-input'
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          required
        />
        <label className='contact-label' htmlFor='email'>
          Email
        </label>
        <input
          className='contact-input'
          id='email'
          type='email'
          name='email'
          placeholder='Email Address'
        />
        <label className='contact-label' htmlFor='subject'>
          Subject
        </label>
        <input
          className='contact-input'
          id='subject'
          type='text'
          name='subject'
          placeholder='Subject'
          required
        />

        <label className='contact-label' htmlFor='message'>
          Message
        </label>
        <textarea
          className='contact-input contact-message'
          id='message'
          type='text'
          name='message'
          placeholder='Message'
          required
        />

        <input
          type='hidden'
          name='_next'
          value='https://themancavehbp.com/'
        ></input>
        <Button name={'primary-btn'} label={'Submit'} />
      </form>
    </div>
  )
}

export default Form
