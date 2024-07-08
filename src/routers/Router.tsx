import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
