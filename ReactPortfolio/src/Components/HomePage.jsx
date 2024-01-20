import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Header'
import HeroSecction from './HeroSection';
import About from './About';
import Footer from './Footer';

const HomePage = () => {
  return (

    <>
        <Header />
        <HeroSecction/>
        <About/>
        <Footer/>
    </>
    
  );
}

export default HomePage;