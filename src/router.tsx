import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./components/signUpPageComponents/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "features", element: <div>features</div> },
      { path: "how-it-works", element: <div>how it works</div> },
      { path: "pricing", element: <div>pricing</div> },
      { path: "contact", element:  <div>contact</div> },
      { path: "login", element: <div>login</div> },
      { path: "signup", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;