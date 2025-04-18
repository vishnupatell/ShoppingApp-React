import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import ToggleContextProvider from "./context/ToggleContextProvider.jsx";
import LoginContextProvider from "./context/LoginContextProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import ItemContextProvider from "./context/ItemContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <Router>
    <ToggleContextProvider>
      <LoginContextProvider>
        <CartProvider>
          <ItemContextProvider>
            <App />
          </ItemContextProvider>
        </CartProvider>
      </LoginContextProvider>
    </ToggleContextProvider>
  </Router>
);
