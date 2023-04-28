import React from "react";

import { logo, MediFlow } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={MediFlow} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Team-clear/pharmacySupplyChainManagementSystem", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Medical Supplies <br className='max-md:hidden' />
        <span className='orange_gradient '>Management system</span>
      </h1>
      <h2 className='desc'>
      Welcome an online system for Health centers and pharmacies to order medicines and equipment from their suppliers. The system provides a convenient and efficient way to purchase and ensure that they always have the medications with the best offer possible.
      </h2>
      <br/>
      <h2 className='desc'>
            what are you looking for?
      </h2>
    </header>
  );
};

export default Hero;
