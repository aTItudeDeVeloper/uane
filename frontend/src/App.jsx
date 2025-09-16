import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import VLibras from "@moreiraste/react-vlibras";

function App() {
  // Garantir que o widget VLibras inicialize
  useEffect(() => {
    if (window.VLibras) {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    }
  }, []);

  return (
    <>
      <Home />
      <VLibras forceOnload={true} />
    </>
  );
}

export default App;
