import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> }, // default route
      {}
    ],
  },
]);

export default router;
