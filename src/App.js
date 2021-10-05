import React from "react";
import GlobalStyles from "./GlobalStyles";
import NavbarComponent from "./components/navbar/NavbarComponent";
import BoxComponent from "./components/box/BoxComponent";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavbarComponent></NavbarComponent>
      <BoxComponent></BoxComponent>
    </>
  );
}

export default App;
