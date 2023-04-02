import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/iconos/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <>
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime similique rerum quo eius vel soluta nobis culpa doloremque quaerat?
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target='_blanc' rel='noreferrer noopener'><FaLinkedin/></a>
                        <a href="https://facebook.com/" target='_blanc' rel='noreferrer noopener'><FaFacebook/></a>
                        <a href="https://twitter.com/" target='_blanc' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                        <a href="https://instagram.com/" target='_blanc' rel='noreferrer noopener'><AiOutlineInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>info links</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </article>
                <article>
                    <h4>info links</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </article>
                <article>
                    <h4>info links</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </article>
            </div>
            <div className="footer__copyrith">
                <small>2023 Meli Barrios &copy; </small>
            </div>
        </footer>
    
    </>
  )
}

export default Footer