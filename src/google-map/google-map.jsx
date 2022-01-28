import React from 'react'
import './google-map.css'

const Map = () => {
  return (
    <iframe
      className='google-map'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.041905760755!2d-86.42748338473659!3d35.84797598015583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f7f1676f7f65%3A0xb7145e44739b087b!2s1948%20Old%20Fort%20Pkwy%2C%20Murfreesboro%2C%20TN%2037129!5e0!3m2!1sen!2sus!4v1643330908419!5m2!1sen!2sus'
      style={{ border: 0 }}
      allowfullscreen='true'
      loading='lazy'
    ></iframe>
  )
}

export default Map
