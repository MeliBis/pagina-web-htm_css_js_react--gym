import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../assets/4.png'


const MainHeader = () => {
  return (
    <>

        <header className='main__header'>
          <div className="container main__header-container">
              <div className="main__header-left">
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join the Legends Of The Fitness World</h1>
                <p> consectetur, adipisicing elit. Alias doloremque corporis illo, fuga voluptas aspernatur ipsa odit! Quidem, soluta illum.</p>
                <Link to='/plans' className='btn lg'>Get started</Link>
              </div>
              <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                  <img src={Image} alt="main header " />
                </div>

              </div>
          </div>
          
      
        </header>
     
      

    </>
  )
}

export default MainHeader