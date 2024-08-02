import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Data from "./Data";
import Arrows from "./Arrows";
import { useStore } from "../Store/useStore";

function Top() {
  const { index } = useStore();
  const data = Data[index];

  return (
    <>
      <Stack direction={{ sm: "row" }} sx={{ width: "100%" }}>
        <Box
          component="img"
          src={data.desktopImg}
          sx={{ width: { sm: "60%", lg: "60%" }, height: "auto" }}
        />
        <Stack
          sx={{
            backgroundColor: "white",
            color: "black",
            height: "auto",
            width: { sm: "40%", lg: "40%" },
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Stack
            spacing={{ sm: 3, lg: 6 }}
            sx={{
              width: { sm: "80%", lg: "70%" },
              height: "500px", // Set a fixed height here
              margin: "auto",
              padding: { sm: "20px", lg: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { sm: "33px", lg: "50px" },
              }}
              variant="h3"
            >
              {data.text1}
            </Typography>
            <>
              <Typography variant="body3" sx={{ opacity: "70%" }}>
                {data.text2}
              </Typography>
            </>
            <Stack
              direction="row"
              spacing={{ sm: 2, lg: 3 }}
              sx={{ alignItems: "center", cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: { sm: "5px", lg: "20px" },
                }}
              >
                SHOP NOW
              </Typography>
              <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fill="#000"
                  fillRule="nonzero"
                />
              </svg>
            </Stack>
            <Arrows />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Top;
