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
      spacing={{ sm: 6, lg: 8 }}
      sx={{
        position: "absolute",
        bottom: { sm: "280px", lg: "200px" },
        right: { sm: "194px", lg: "488px" },
        alignItems: "center",
        backgroundColor: "black",
        width: "auto",
        alignItems: "center",
        backgroundColor: "black",
        padding: { sm: "25px", lg: "30px" },
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
