import React from 'react'
import Header from '../../components/Header' 
import HeaderImage from '../../assets/7.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'


import './plans.css'

const PlansPage = () => {
  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at debitis blanditiis, non dolore eos. Nobis, alias earum! Eius, reiciendis.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
                return <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1>
                  <h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available},index) => {
                      return <p key={index}className={!available ? 'disable' :''}>
                        {feature}</p>
                    })
                  }
                  <button className='btn lg'>Choose Plan</button>
                </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default PlansPage