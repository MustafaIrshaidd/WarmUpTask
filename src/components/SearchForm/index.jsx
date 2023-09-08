import { FormControl, Input, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const SearchForm = () => {
  return (
    <>
      <FormControl>
        <SearchIcon
          sx={{ position: "absolute", height: "100%", paddingTop: "5px" }}
        />
        <InputLabel
          htmlFor="my-input"
          sx={{ display: "flex", alignItems: "center", paddingLeft: "15px" }}>
          Find members
        </InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          sx={{ paddingLeft: "30px" }}
        />
      </FormControl>
    </>
  );
};

export default SearchForm;
