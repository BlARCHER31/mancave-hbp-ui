import React from 'react'
import ServicesTable from '../tables/services-table'
import './services.css'
import CarouselItem from './../carousel/carouselItem'
import Carousel from '../carousel/carousel'
import Button from './../button/button'

const hairServicesData = [
  { service: 'Haircuts', time: 30, key: '1' },
  { service: 'Straight Razor Cuts', time: 45, key: '2' },
  { service: 'Shaves', time: 30, key: '3' },
  { service: 'Neck and Shoulder Massage', time: 10, key: '4' },
  { service: 'Scalp Massage', time: 15, key: '5' },
]

const faceServicesData = [
  { service: 'Beard Trims', time: 15, key: '1' },
  { service: 'Mustache/Goatee', time: 10, key: '2' },
  { service: 'Color', time: '30+', key: '3' },
  { service: 'Waxes/Facials', time: 10, key: '4' },
  { service: 'Facials', time: 15, key: '5' },
]

const Services = () => {
  return (
    <div id='services' className='services'>
      <h3 className='title'>Services</h3>
      <Carousel>
        <CarouselItem data={hairServicesData} />
        <CarouselItem data={faceServicesData} />
      </Carousel>
    </div>
  )
}

export default Services
