import { createFileRoute } from "@tanstack/react-router";
import { PaginaInicial } from "@/paginas/PaginaInicial";

export const Route = createFileRoute("/")({
  component: PaginaInicial,
});
