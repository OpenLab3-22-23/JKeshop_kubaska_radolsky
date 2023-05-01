import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Contact from "../Contact";
import Home from "../Home";
import Product from "../Products";
import LandingPage from "../LandingPage";
import MyCart from "../MyCart";
import ShoppingCart from "../ShoppingCart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
  {
    path: "/MyCart",
    element: <MyCart />,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart />,
  },
]);


