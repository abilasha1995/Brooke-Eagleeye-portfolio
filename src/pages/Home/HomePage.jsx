import React from 'react'
import { Navbar } from '../../component/Navbar/Navbar';
import { About } from '../../component/About/About';
import { Hero } from '../../component/Hero/Hero';
import { Carrier } from '../../component/Carrier/Carrier';
import { Gallery } from '../../component/Gallery/Gallery';
import { Events } from '../../component/Events/Events';
import { Trademark } from '../../component/Trademark/Trademark';
import { ContactMe } from '../../component/ContactMe/ContactMe';
import { Footer } from '../../component/Footer/Footer';

export const HomePage = () => {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Carrier/>
        <Gallery/>
        <Events/>
        <Trademark/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}
