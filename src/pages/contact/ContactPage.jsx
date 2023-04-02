import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const ContactPage = () => {
  return (
    <>
     <Header title='get in touch' image={HeaderImage}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero aliquam cumque eum ex maiores delectus incidunt repudiandae voluptatibus, magni ipsa amet, voluptates voluptas et sunt!
     </Header>
 
    <section>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:melissa.blecona@gmail.com" target='_blanc' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://m.me/melibis" target='_blanc' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="http://wa.me/+5615999821" target='_blanc' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>


    </>
  )
}

export default ContactPage