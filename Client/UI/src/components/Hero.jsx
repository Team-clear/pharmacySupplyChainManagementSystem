import React from "react";
import TypewriterComponent from "typewriter-effect";
import { logo, MediFlow } from "../assets";
import { Button } from "@mantine/core";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={MediFlow} alt='sumz_logo' className='w-28 object-contain' />

        <Box display="flex" justifyContent="space-between">
          <Box color="dark" paddingLeft="5%">
            <Button variant="subtle" color="dark" radius="xl"
              onClick={() => {
                navigate("/");
              }}
            >
              Search
            </Button>
          </Box>
          <Box color="dark" paddingLeft="5%" marginRight="10%">
            <Button variant="subtle" color="dark" radius="xl"
              onClick={() => {
                navigate("/product");
              }}
            >
              All
            </Button>
          </Box>
          <button
            type="button"

            onClick={() =>
              window.open(
                "https://github.com/Team-clear/pharmacySupplyChainManagementSystem",
                "_blank"
              )
            }
            className="black_btn"
          >
            GitHub
          </button>
        </Box>
      </nav>

      <h1 className="head_text">
        medical supplies <br className="max-md:hidden" />
        <span className="orange_gradient ">Management system</span>
      </h1>
      <h2 className="desc">
        <TypewriterComponent
          options={{
            strings: [
              "Welcome an online system for Health centers and pharmacies to order medicines and equipment from their suppliers.",
            ],
            autoStart: true,
          }}
        />

        {/*  The system provides a
        convenient a nd efficient way to purchase and ensure that they always
        have the medications with the best offer possible. */}
      </h2>
      <br />
      <h2 className="desc">
        <Typography variant="h4">What are you looking for?</Typography>
      </h2>
    </header>
  );
};

export default Hero;
