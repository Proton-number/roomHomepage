import React, { lazy, Suspense } from "react";
import "./App.css";
const Nav = lazy(() => import("./Components/Nav"));
const MobileNav = lazy(() => import("./Components/MobileNav"));
const Top = lazy(() => import("./Components/Top"));
const Bottom = lazy(() => import("./Components/Bottom"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Nav />
        <MobileNav />
        <Top />
        <Bottom />
      </Suspense>
    </>
  );
}

export default App;
