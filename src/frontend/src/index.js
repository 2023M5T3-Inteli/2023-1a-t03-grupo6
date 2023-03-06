import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Profile } from "./pages/profile";
import { Projects } from './pages/projects';
import { FAQ } from './pages/faq';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectModalCtxProvider } from "./context/project-modal-ctx";
import { InfoModalCtxProvider } from "./context/info-modal-ctx";
import { ApplyModalCtxProvider } from "./context/apply-modal-ctx";

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
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoModalCtxProvider>
    <ApplyModalCtxProvider>
    <ProjectModalCtxProvider>
      <RouterProvider router={router} />
    </ProjectModalCtxProvider>
    </ApplyModalCtxProvider>
    </InfoModalCtxProvider>
  </React.StrictMode>
);
