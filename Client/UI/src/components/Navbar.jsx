import React from "react";
import { logo } from "../assets";
import { Text } from "@mantine/core";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
const Navbar = () => {
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
    </header>
  );
};

export default Navbar;
