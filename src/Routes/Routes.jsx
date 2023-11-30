import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Gallery from "../pages/Gallery/Gallery/Gallery";
import Register from "../pages/Register/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
