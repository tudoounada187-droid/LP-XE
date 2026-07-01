import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PaginaInicial } from "@/paginas/PaginaInicial";
import "@/estilos/globais.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PaginaInicial />
  </StrictMode>,
);
