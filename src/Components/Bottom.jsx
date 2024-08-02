import React, { lazy } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Dark from "/images/image-about-dark.jpg";
import Light from "/images/image-about-light.jpg";

function Bottom() {
  return (
    <Stack direction="row">
      <Box component="img" src={Dark} />
      <Stack
        sx={{
          backgroundColor: "white",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", letterSpacing: { sm: "5px", lg: "10px" } }}
        >
          ABOUT OUR FURNITURE
        </Typography>
        <Typography variant="body3" sx={{ opacity: "70%" }}>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Typography>
      </Stack>

      <Box component="img" src={Light} />
    </Stack>
  );
}

export default Bottom;
