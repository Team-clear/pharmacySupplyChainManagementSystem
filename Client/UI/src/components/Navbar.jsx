import React from 'react';
import { logo } from "../assets";
import { Text } from '@mantine/core';

const Navbar = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz_logo' className='w-28 object-contain' />


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
        </header>
    )
}

export default Navbar