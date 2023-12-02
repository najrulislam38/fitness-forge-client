import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Gallery from "../pages/Gallery/Gallery/Gallery";
import Register from "../pages/Register/Register";
import Trainer from "../pages/Trainer/Trainer/Trainer";
import SingleTrainer from "../pages/SingleTrainer/SingleTrainer";
import BeATrainer from "../pages/BeATrainer/BeATrainer";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserDashboard/UserHome/UserHome";
import UserActivity from "../pages/Dashboard/UserDashboard/UserActivity/UserActivity";
import UserProfile from "../pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import RecommendedClass from "../pages/Dashboard/UserDashboard/RecommendedClass/RecommendedClass";

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
        path: "be-a-trainer",
        element: (
          <PrivateRoute>
            <BeATrainer />
          </PrivateRoute>
        ),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user dashboard children layout
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/activity",
        element: (
          <PrivateRoute>
            <UserActivity></UserActivity>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/recommended-classes",
        element: (
          <PrivateRoute>
            <RecommendedClass></RecommendedClass>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
