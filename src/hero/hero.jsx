import React from 'react'
import './hero.css'
import Button from './../button/button'
const Hero = () => {
  return (
    <div className='hero'>
      <span className='hero-title'>
        <p className='title'>The Man Cave</p>
        <p className='sub-title'>Hair and Beard Parlor</p>
      </span>
      <ul className='hero-nav'>
        <li className='hero-nav-item'>About</li>
        <li className='hero-nav-item'>Services</li>
        <li className='hero-nav-item'>Contact</li>
      </ul>
      {<Button name={'primary-btn'} label={'Book'} />}
    </div>
  )
}
export default Hero
