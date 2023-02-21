import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#be9c91",
        main: "#8d6e63",
        dark: "#5f4339",
        contrastText: "#e1e1e1",
      },
      secondary: {
        light: "#ff5f52",
        main: "#c62828",
        dark: "#8e0000",
        contrastText: "#000",
      },
    },
  });
  const RootLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </>
    </div>
  );
}

export default App;
