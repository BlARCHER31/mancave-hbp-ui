import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-item'>
        1948 Old Fort PKWY <br></br>
        Murfreesboro, TN 37129
        <br />
        United States <br />
        <br />
        Suite 204
      </p>
      <span className='footer-item footer-link'>
        <FaFacebookSquare size={36} />
        <FaInstagram size={36} />
      </span>
      <span className='footer-item'>
        <p>themancavehbp2022@gmail.com</p>
        <br />
        <p className='developer-name'>
          created by:{' '}
          <a href='https://archerprogramming.com/'>ArcherProgramming</a>
        </p>
      </span>
    </div>
  )
}

export default Footer
