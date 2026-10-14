import React from "react";
import ReactDOM from "react-dom/client";
// Ponto de entrada: monta o componente principal e carrega os estilos globais.
import Aplicacao from "./Aplicacao";
import "./styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Aplicacao />
  </React.StrictMode>,
);
