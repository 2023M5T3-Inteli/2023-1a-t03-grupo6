import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalCtxProvider } from "./context/modal-ctx";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalCtxProvider>
      <App />
    </ModalCtxProvider>
  </React.StrictMode>
);
