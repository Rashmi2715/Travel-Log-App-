import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Get real-time weather data and forecasts to plan your day, week, or travels with confidence.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Your Adventure Awaits with the Best Tour Guides Unlock unforgettable experiences with our expert guides.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailor Your Journey Your Way Customize your adventure to match your preferences and interests.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList