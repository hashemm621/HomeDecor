import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,

        Component: Home,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);
export default router;
