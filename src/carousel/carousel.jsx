import React, { useState } from 'react'
import './carousel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className='carousel'>
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <div className='indicators'>
        <button
          className='carousel-btn prev'
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          &#8678;
        </button>
        <button
          className='carousel-btn next'
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          &#8680;
        </button>
      </div>
    </div>
  )
}

export default Carousel
