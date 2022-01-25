import React from 'react'
import ServicesTable from '../tables/services-table'
import './services.css'
import CarouselItem from './../carousel/carouselItem'
import Carousel from '../carousel/carousel'
import Button from './../button/button'

const hairServicesData = [
  { service: 'Haircuts', time: 30, key: '1' },
  { service: 'Straight Razor Fades', time: 45, key: '2' },
  { service: 'Color', time: 15, key: '3' },
  { service: 'Neck and Shoulder', time: 10, key: '4' },
  { service: 'Massages', time: 15, key: '5' },
]

const faceServicesData = [
  { service: 'Beard/Mustache/Goatee', time: 10, key: '1' },
  { service: 'Trims', time: 10, key: '2' },
  { service: 'Straight Razor Shave', time: 15, key: '3' },
  { service: 'Waxes', time: 10, key: '4' },
  { service: 'Facials', time: 15, key: '5' },
]

const Services = () => {
  return (
    <div className='services'>
      <h1 className='title'>Services</h1>
      <Carousel>
        <CarouselItem data={hairServicesData} />
        <CarouselItem data={faceServicesData} />
      </Carousel>
      <Button name={'primary-btn'} label={'Book'} />
    </div>
  )
}

export default Services
