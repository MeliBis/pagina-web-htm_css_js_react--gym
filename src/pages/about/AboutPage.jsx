import React from 'react'
import Header from '../../components/Header'
import ImageHeader from '../../assets/3.jpg'
import './about.css'
import StoryImage from  '../../assets/6.jpg'
import VisionImage from  '../../assets/10.jpg'
import MisionImage from  '../../assets/1.jpg'


const AboutPage = () => {
  return (
    <>
      <Header title='About us' image={ImageHeader}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis odit error iste corrupti asperiores dolores provident quisquam eius nulla totam.
      </Header>


      <div className="about-container">
      <section className="about__story">
      <div className="container about__story-container">
      <div className="about__section-image">
          <img src={VisionImage} alt="story" />
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
        </div>
        <div className="about__section-image">
          <img src={StoryImage} alt="story" />
        </div>
      </div>
    </section>

    <section className="about__mision">
      <div className="container about__mision-content">
        <div className="about__section-image">
          <img src={MisionImage} alt="story" />
        </div>
        <div className="about__section-content">
          <h1>Our mision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores provident commodi eum quos totam impedit veniam, dolores nemo expedita rem quis voluptatum facilis hic dolorum vel explicabo fuga doloremque distinctio!</p>
        </div>
    
      </div>
    </section>
      </div>
   
    </>
  )
}

export default AboutPage