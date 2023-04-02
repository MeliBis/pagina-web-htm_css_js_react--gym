import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import GalleryPage from '../pages/gallery/GalleryPage';
import HomePage from '../pages/Home/HomePage';
import NotfoundPage from '../pages/notfound/NotfoundPage';
import PlansPage from '../pages/plans/PlansPage';
import TrainersPage from '../pages/trainers/TrainersPage';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/plans" element={<PlansPage/>}/>
          <Route path="/trainer" element={<TrainersPage/>}/>

          <Route path="/*" element={<NotfoundPage/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default AppRouter