import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import React from "react";
import { useStore } from "../Store/useStore";
import { motion } from "framer-motion";
import logo from "/images/logo.svg";

function MobileNav() {
  const { isDrawerOpen, setIsDrawerOpen } = useStore();
  return (
    <Box id="mobileNav">
      <Toolbar sx={{ position: "absolute", zIndex: 1 }}>
        <IconButton aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </IconButton>
        <Box component="img" src={logo} />
      </Toolbar>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          height="100px"
          role="presentation"
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              aria-label="close-icon"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                  fill="#000"
                  fill-rule="evenodd"
                  opacity=".201"
                />
              </svg>
            </IconButton>
          </Toolbar>
          <Stack spacing={5} direction="row">
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              home
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              shop
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              about
            </Typography>
            <Typography
              component={motion.p}
              whileHover={{ y: -4 }}
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              contact
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
