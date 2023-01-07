import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Features from './Features';
import ContactForm from '../ContactForm';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Features></Features>
        <ContactForm/>
        <Footer></Footer>
    </div>
  )
}

export default Home;