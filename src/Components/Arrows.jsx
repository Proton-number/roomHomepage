import React from "react";
import { Box, Stack } from "@mui/material";
import left from "/images/icon-angle-left.svg";
import right from "/images/icon-angle-right.svg";
import { useStore } from "../Store/useStore";

function Arrows() {
  const { previous, next } = useStore();
  return (
    <Stack
      direction="row"
      spacing={{ xs: 4, sm: 6, lg: 8 }}
      sx={{
        position: "absolute",
        zIndex: 1,
        bottom: { xs: "65%", sm: "50%", lg: "50%" },
        right: { xs: "0px", lg: "30px" },
        alignItems: "center",
        backgroundColor: "black",
        padding: { xs: "14px", sm: "25px", lg: "30px" },
      }}
    >
      <Box
        component="img"
        src={left}
        sx={{ cursor: "pointer" }}
        onClick={previous}
      />
      <Box
        component="img"
        src={right}
        sx={{ cursor: "pointer" }}
        onClick={next}
      />
    </Stack>
  );
}

export default Arrows;
