import React from "react";
import "./App.css";
import { Typography, Box } from "@mui/material";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import Top from "./Components/Top";

function App() {
  return (
    <>
      <Nav />
      <MobileNav />
      <Top />
    </>
  );
}

export default App;
