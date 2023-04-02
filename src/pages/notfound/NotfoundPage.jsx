import React from 'react'
import {Link} from 'react-router-dom'
import './notFound.css'


const NotfoundPage = () => {
  return (
    <>
      <section>
        <div className="container notfound__container">
          <h2>Page not found</h2>
          <Link to='/' className='btn'>Go Back home</Link>
        </div>
      </section>
    </>
  )
}

export default NotfoundPage