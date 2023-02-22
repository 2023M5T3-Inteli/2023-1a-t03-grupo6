import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalCtxProvider } from "./context/modal-ctx";
import "./styles/global.scss";
import { Profile } from "./pages/profile";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalCtxProvider>
      <RouterProvider router={router} />
    </ModalCtxProvider>
  </React.StrictMode>
);
