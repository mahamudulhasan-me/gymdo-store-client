import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import ManageProduct from "../pages/ManageProduct";
import Products from "../pages/Products";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/manage-product",
        element: <ManageProduct />,
      },
    ],
  },
]);

export default router;
