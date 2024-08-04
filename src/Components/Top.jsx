import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Data from "./Data";
import Arrows from "./Arrows";
import { useStore } from "../Store/useStore";
import { motion } from "framer-motion";

function Top() {
  const { index } = useStore();
  const data = Data[index];
  const MotionSvg = motion("svg");

  return (
    <>
      <Stack direction={{ xs: "column", lg: "row" }} sx={{ width: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={data.desktopImg}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />

          <Arrows />
        </Box>
        <Stack
          sx={{
            backgroundColor: "white",
            color: "black",
            height: { xs: "550px", sm: "350px", lg: "700px" },
            width: { xs: "100%", lg: "50%" },
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Stack
            spacing={{ xs: 2, sm: 3, lg: 6 }}
            sx={{
              width: { sm: "80%", lg: "70%" },
              margin: "auto",
              padding: { xs: "30px", sm: "40px", lg: 0 },
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
              <Typography
                variant="body3"
                sx={{ opacity: "70%", textAlign: "justify" }}
              >
                {data.text2}
              </Typography>
            </>
            <Stack
              direction="row"
              spacing={{ xs: 2, lg: 3 }}
              sx={{ alignItems: "center", cursor: "pointer" }}
              component={motion.div}
              whileHover="hover"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: { sm: "5px", lg: "20px" },
                }}
              >
                SHOP NOW
              </Typography>
              <MotionSvg
                variants={{
                  hover: { x: 20 },
                }}
                width="40"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fill="#000"
                  fillRule="nonzero"
                />
              </MotionSvg>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Top;
