import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
]);
