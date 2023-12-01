import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Gallery from "../pages/Gallery/Gallery/Gallery";
import Register from "../pages/Register/Register";
import Trainer from "../pages/Trainer/Trainer/Trainer";
import SingleTrainer from "../pages/SingleTrainer/SingleTrainer";

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
        path: "trainer",
        element: <Trainer />,
      },
      {
        path: "trainer/:id",
        element: <SingleTrainer></SingleTrainer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
      },
      {
        path: "classes",
        element: <Trainer />,
      },
      {
        path: "community",
        element: <Trainer />,
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
