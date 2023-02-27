import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Profile } from "./pages/profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectModalCtxProvider } from "./context/project-modal-ctx";
import { InfoModalCtxProvider } from "./context/info-modal-ctx";

import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoModalCtxProvider>
    <ProjectModalCtxProvider>
      <RouterProvider router={router} />
    </ProjectModalCtxProvider>
    </InfoModalCtxProvider>
  </React.StrictMode>
);
