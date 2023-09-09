import React from "react";
import MemberCard from "../MemberCard";
import SearchForm from "../SearchForm";
import { Button, Grid } from "@mui/material";

const MembersContainer = () => {
  return (
    <>
      <Grid container width={"90%"} margin={"auto"} spacing={3}>
        <Grid item xs={12}>
          <SearchForm></SearchForm>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MemberCard isChecked={false}></MemberCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MemberCard isChecked={false}></MemberCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MemberCard isChecked={false}></MemberCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MemberCard isChecked={false}></MemberCard>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}>
          <Button variant="outlined" size="large" sx={{ minWidth: "130px" }}>
            Cancel
          </Button>
          <Button variant="contained" size="large" sx={{ minWidth: "130px" }}>
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MembersContainer;
