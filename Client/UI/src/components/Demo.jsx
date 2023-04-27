import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Container,
  cardActionAreaClasses,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { copy, linkIcon, loader, tick } from "../assets";
import { useNavigate } from "react-router";
import medContext from "./context";

const Demo = () => {
  const [medicine, setMedicine] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [_, setSearched] = useContext(medContext);

  useEffect(() => {
    searchMedicine();
  }, [medicine]);

  async function searchMedicine(e) {
    e.preventDefault();
    setLoading(true);
    //`http://13.40.153.119/searchMedicine?Title=${}&City=${}`,
    let res = await fetch(
      `http://localhost:8045/searchMedicine?Title=${medicine}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );

    let med = await res.json();
    setSearched(med.dosc);
    navigate("/searchresults");
    setLoading(false);
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <Box component="form" onSubmit={searchMedicine} Validate sx={{ mt: 1 }}>
          <Box
            style={{
              backgroundColor: "#fffeff",
              padding: "7%",
              borderRadius: "4px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12}>
                    <FormControl sx={{ mt: 0, minWidth: "100%" }}>
                      <TextField
                        fullWidth
                        required
                        margin="normal"
                        id="medicine"
                        label="MEDICINE"
                        name="medicine"
                        type="text"
                        value={medicine}
                        onChange={(e) => {
                          setMedicine(e.target.value);
                        }}
                        autoFocus
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box paddingTop="9%">
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "4px",
                      padding: "5%",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                    }}
                    // className={styles.btnSearch}
                  >
                    Search
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto"></div>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center"></div>
    </section>
  );
};

export default Demo;
