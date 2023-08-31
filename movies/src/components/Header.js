import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { getAllMovies } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";
// const dummyArray = ["eMemory", "Brahmastra", "OK", "PK"];

const Header = () => {
    const [movies,setMovies] = useState([])
    const [value, setValue] = useState();
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies))
        .catch((err) => console.log(err))
    },[]);
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width="20%">
          {/* <Link to="/" style={{ color: "white" }}> */}
          <MovieCreationIcon />
          {/* </Link> */}
        </Box>
        <Box width="50%" marginRight={"auto"} marginLeft="auto">
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
                <TextField
                variant="standard"
                {...params}
               
                  sx={{
                    borderRadius: 2,
                    input: { color: "white" },
                    bgcolor: "#2b2d42",
                    padding: "6px",
                  }}
                
                  placeholder="Search Movies"
                
                //   InputProps={{
                //     ...params.InputProps,
                //     type: "search",
                //   }}
                />
              )}
            />
        </Box>
        <Box display="flex">
          <Tabs
            onChange={(e, val) => setValue(val)}
            value={value}
            textColor="inherit"
          >

            <Tab LinkComponent={Link} to="/movies" label="Movies"></Tab>
            <Tab LinkComponent={Link} to="/auth" label="Auth"></Tab>
            <Tab LinkComponent={Link} to="/admin" label="Admin"></Tab>
          </Tabs>
          </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
