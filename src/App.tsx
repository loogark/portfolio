import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { Header } from "./components/Header";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SecretLairPage } from "./pages/SecretLairPage";
import { SelfPage } from "./pages/SelfPage";

export default function App() {
  const element = useRoutes([
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
    {
      path: "/secret-lair",
      element: <SecretLairPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <Box w='100%' h='100%'>
      <AnimatePresence mode='wait' initial={false}>
        <Header />
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </Box>
  );
}
