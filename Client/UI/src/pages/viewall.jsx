import React from "react";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";
import { Center, Grid, Container, SimpleGrid, Button } from "@mantine/core";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import medContext from "../components/context";
import { Box, Typography } from "@mui/material";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

const allMeds = () => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setloading] = useState(false);
  const [Title, setTitle] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    returnMedicines();
  }, []);

  async function returnMedicines() {
    let res = await fetch("http://localhost:8045/allMedicines", {
      method: "GET",
    });

    let med = await res.json();
    //console.log(med.properties);
    setMedicine(med.properties);
  }
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <NavbarOne />
        <Center>
          <h1 className="sub_head_text">
            Search Results for:
            <br className="max-md:hidden" />
          </h1>
        </Center>
        <Container>
          <Center maw={1100} mx="auto" pt={30}>
            <SimpleGrid cols={3}>
              {medicine.length == 0 ? (
                <div
                  style={{
                    height: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Box>
                      <Typography variant="h5">
                        No medicine available
                      </Typography>
                    </Box>
                  </div>
                </div>
              ) : (
                medicine.map((c) => {
                  return <ResultCard Title={c.Title} pharmacy={c.City} />;
                })
              )}
            </SimpleGrid>
          </Center>
        </Container>
      </div>

      <Footer />
    </main>
  );
};

export default allMeds;
