import React from 'react'
import './hero.css'
import Button from './../button/button'
import Map from '../google-map/google-map'
const Hero = () => {
  return (
    <div className='hero'>
      <span className='hero-title'>
        <p className='title'>The Man Cave</p>
        <p className='sub-title'>Hair and Beard Parlor</p>
      </span>
      <ul className='hero-nav'>
        <li>
          <a className='hero-nav-item' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='hero-nav-item' href='#services'>
            Services
          </a>
        </li>
        <li>
          <a className='hero-nav-item' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
      {<Button name={'primary-btn'} label={'Book'} />}
    </div>
  )
}
export default Hero
