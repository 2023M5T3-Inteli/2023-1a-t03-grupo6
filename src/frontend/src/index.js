import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Profile } from "./pages/profile";
import { Projects } from "./pages/projects";
import { FAQ } from "./pages/faq";
import { MyProjects } from "./pages/myProjects";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectModalCtxProvider } from "./context/project-modal-ctx";
import { InfoModalCtxProvider } from "./context/info-modal-ctx";
import { ApplyModalCtxProvider } from "./context/apply-modal-ctx";
import { ApprovedModalCtxProvider } from "./context/approved-modal-ctx";
import { RejectedModalCtxProvider } from "./context/rejected-modal-ctx";

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
  {
    path: "/myProjects",
    element: <MyProjects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoModalCtxProvider>
      <ApplyModalCtxProvider>
        <ProjectModalCtxProvider>
          <RejectedModalCtxProvider>
            <ApprovedModalCtxProvider>
              <RouterProvider router={router} />
            </ApprovedModalCtxProvider>
          </RejectedModalCtxProvider>
        </ProjectModalCtxProvider>
      </ApplyModalCtxProvider>
    </InfoModalCtxProvider>
  </React.StrictMode>
);
