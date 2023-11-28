import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

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
        element: <p>Gallery page</p>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <p>Gallery page</p>,
      },
    ],
  },
]);

export default Routes;
