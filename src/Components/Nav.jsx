import { Box, Stack, Typography, Toolbar } from "@mui/material";
import React from "react";
import logo from "/images/logo.svg";
import { motion } from "framer-motion";

function Nav() {
  return (
    <>
      <Stack id="desktopNav">
        <Toolbar sx={{ position: "absolute" }}>
          <Box component="img" src={logo} />
          <Stack direction="row" spacing={6} sx={{ marginLeft: "80px" }}>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", color: "white", cursor: "pointer" }}
            >
              home
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", color: "white", cursor: "pointer" }}
            >
              shop
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", color: "white", cursor: "pointer" }}
            >
              about
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", color: "white", cursor: "pointer" }}
            >
              contact
            </Typography>
          </Stack>
        </Toolbar>
      </Stack>
    </>
  );
}

export default Nav;
