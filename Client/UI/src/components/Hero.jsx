import React from "react";
import TypewriterComponent from "typewriter-effect";

import { logo } from "../assets";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <Box display="flex" justifyContent="space-between">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/Team-clear/pharmacySupplyChainManagementSystem",
                "_blank"
              )
            }
            // className="black_btn"
          >
            GitHub
          </button>

          <Box color="dark" paddingLeft="5%">
            <Button
              style={{
                color: "black",

                borderRadius: "35%",
              }}
              onClick={() => {
                navigate("/product");
              }}
            >
              All
            </Button>
          </Box>
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
            loop: true,
          }}
        />

        {/*  The system provides a
        convenient and efficient way to purchase and ensure that they always
        have the medications with the best offer possible. */}
      </h2>
      <br />
      <h2 className="desc">
        <Typography variant="h4">What are you looking for?</Typography>
      </h2>

      <Button>Find here</Button>
    </header>
  );
};

export default Hero;
