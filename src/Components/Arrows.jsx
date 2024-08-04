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
        alignItems: "center",
        backgroundColor: "black",
        padding: { xs: "14px", sm: "25px", lg: "30px" },
        width: "auto",
        position: "absolute",
        bottom: { xs: 0 },
        right: { xs: 0, lg: -150 },
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
