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

const SearchResults = () => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setloading] = useState(false);
  const [Title, setTitle] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const location = useLocation();
  const [searchedMed, _] = useContext(medContext);
  const navigate = useNavigate();
  console.log(searchedMed);

  useEffect(() => {
    returnMedicines();
  }, []);

  async function searchMedicine() {
    setloading(true);
    let res = await fetch(
      //`http://13.40.153.119/searchMedicine?Title=${}&City=${}`,

      `http://localhost:8045/searchMedicine?Title=${Title}&City=${pharmacy}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    let med = await res.json();
    //setMedicine(med);
    setloading(false);
  }

  async function returnMedicines() {
    let res = await fetch("http://13.40.153.119/allMedicines", {
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
              {searchedMed.length == 0 ? (
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
                searchedMed.map((c) => {
                  return (
                    <ResultCard Title={c.Title} pharmacy={c.City} id={c._id} />
                  );
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

export default SearchResults;
