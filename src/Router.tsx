import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SelfPage } from "./pages/SelfPage";

export namespace Router {
  export const _router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/self",
          element: <SelfPage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
}
