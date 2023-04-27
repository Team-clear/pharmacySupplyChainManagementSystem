import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import React from 'react';

const Home = () => {
  return (
    <main>
    <div className='main'>
      <div className='gradient' />
    </div>

    <div className='app'>
      <Hero />
      <Demo />
    </div>

    <Footer/>

  </main>
  )
}

export default Home