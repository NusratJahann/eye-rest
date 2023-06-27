import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Settings from "../Pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/settings",
    element: <Settings></Settings>,
  },
]);
