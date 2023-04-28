
import React from "react";
import { logo, MediFlow } from "../assets";
import { Text, Button } from "@mantine/core";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";


const NavbarOne = () => {
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
    </header>
  );
};

export default NavbarOne;
