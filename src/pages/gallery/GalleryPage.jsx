import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/2.jpg'
import './gallery.css'


const GalleryPage = () => {
  const galleryLength = 15;
  const images = []

    for(let i=1; i<= galleryLength; i++){
      images.push(require(`../../images/gallery${i}.jpg`))

    }
   


  return (
    <>
      <Header title='Our gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, itaque amet. Cupiditate labore tenetur iusto culpa magnam ipsa repellat molestias praesentium, commodi earum!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`gallery image ${index + 1}`} />
              </article>
            
          })
        }
        </div>
      </section>
    </>
  )
}

export default GalleryPage