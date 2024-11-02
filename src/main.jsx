import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Router";
import AuthProvider from "./context/useContextProjects";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <AuthProvider>
    <React.StrictMode>
      <div>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>

  </AuthProvider>
  </ThemeProvider>
);
