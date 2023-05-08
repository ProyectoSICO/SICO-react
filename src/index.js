/* Se inicia el proyecto creando el index.js como ruta principal en donde se determina el ruteo para todas las páginas
   Se importan las extensiones requeridas y los estilos  */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css/estilo.css";
import "./styles.css/inicio.css";
import "./styles.css/container.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Registro from "./routes/Registro";
import InicioSesion from "./routes/InicioSesion";
import Error from "./routes/Error";
import IngresoAdministrativo from "./routes/IngresoAdministrativo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Registro.jsx",
    element: <Registro />,
  },
  {
    path: "/InicioSesion.jsx",
    element: <InicioSesion />,
  },
  {
    path: "/IngresoAdministrativo.jsx",
    element: <IngresoAdministrativo />,
  },
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
