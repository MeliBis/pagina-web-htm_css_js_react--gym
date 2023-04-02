import React from 'react'
import Image from '../assets/8.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
          <div className="values__left">
            <div className="values__image">
              <img src={Image} alt="values" />
            </div>
          </div>
          <div className="values__right">
            <SectionHead icon={<GiCutDiamond/>} title='Values'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque modi numquam ullam labore veritatis repellat eaque dolore dicta voluptates.
            </p>
            <div className="values__wrapper">
              {
                values.map(({id, icon, title, desc}) => {
                  return <Card key={id} className='values__value'>
                      <span>{icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>
                  </Card>
                })
              }
            </div>
          </div>
        </div>
    <SectionHead/>
    
    </section>
  )
}

export default Values