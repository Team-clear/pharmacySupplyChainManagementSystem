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
      `http://13.40.153.119/searchMedicine?Title=${medicine}`,
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

        <form
          className='relative flex justify-center items-center'
          onSubmit={searchMedicine}
        >


          <input
            type='text'
            value={medicine}
            onChange={(e) => {
              setMedicine(e.target.value);
            }}
            autoFocus
            required
            className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <img
              src={linkIcon}
              alt='link-icon'
              className='absolute left-0 my-2 ml-3 w-5'
            />
          </button>
        </form>











        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto"></div>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center"></div>
    </section>
  );
};

export default Demo;
