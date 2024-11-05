import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Authprovider from "./context/authentication.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authprovider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Authprovider>
  </React.StrictMode>
);
