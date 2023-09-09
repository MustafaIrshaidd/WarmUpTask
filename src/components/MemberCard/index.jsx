import { Box, Card, CardContent, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

const MemberCard = ({ isChecked }) => {
  return (
    <>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            component="div"
            display="flex"
            gap="2%"
            minWidth="50%"
            maxWidth={"80%"}>
            <PersonIcon></PersonIcon>

            <Typography
              variant="h1"
              sx={{
                fontSize: "16px",
                border: 0,
                display: "flex",
                alignItems: "center",
              }}
              noWrap>
              Add members to Front-end development team
            </Typography>
          </Box>

          {isChecked ? (
            <CheckCircleOutlineIcon sx={{ color: "#2DD135" }} />
          ) : (
            <RadioButtonUncheckedIcon sx={{ color: "#6A6B6A" }} />
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default MemberCard;
