import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Authprovider from "./context/authentication.tsx";
import SignupGlobalsession from "./context/signupGlobal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authprovider>
      <SignupGlobalsession>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </SignupGlobalsession>
    </Authprovider>
  </React.StrictMode>
);
