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
import AdminRoute from "./AdminRoute";
import AllSubscriber from "../pages/Dashboard/AdminDashborad/AllSubscriber/AllSubscriber";
import AllTrainers from "../pages/Dashboard/AdminDashborad/AllTrainers/AllTrainers";
import AppliedTrainers from "../pages/Dashboard/AdminDashborad/AppliedTrainers/AppliedTrainers";
import AdminBalance from "../pages/Dashboard/AdminDashborad/AdminBalance/AdminBalance";
import TrainerRoute from "./TrainerRoute";
import ManageSlots from "../pages/Dashboard/TrainerDashboard/ManageSlots/ManageSlots";
import ManageMember from "../pages/Dashboard/TrainerDashboard/ManageMember/ManageMember";
import AddNewForum from "../pages/Shared/AddNewForum/AddNewForum";
import AddNewClass from "../pages/Dashboard/TrainerDashboard/AddNewClass/AddNewClass";
import Community from "../pages/Community/Community/Community";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Classes from "../pages/Classes/Classes/Classes";
import SingleClass from "../pages/SingleClass/SingleClass";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
          fetch(
            `https://fitness-forge-server.vercel.app/trainers/${params.id}`
          ),
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
        element: <Classes />,
      },
      {
        path: "classes/:id",
        element: <SingleClass />,
        loader: ({ params }) =>
          fetch(`https://fitness-forge-server.vercel.app/classes/${params.id}`),
      },
      {
        path: "community",
        element: <Community />,
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
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // admin dashboard children routes
      {
        path: "/dashboard/all-subscribers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSubscriber />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllTrainers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/applied-trainers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AppliedTrainers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin-balance",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminBalance />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-new-forum",
        element: (
          <PrivateRoute>
            {(
              <TrainerRoute>
                <AddNewForum />
              </TrainerRoute>
            ) || (
              <AdminRoute>
                <AddNewForum />
              </AdminRoute>
            )}
          </PrivateRoute>
        ),
      },

      // Trainer dashboard routes
      {
        path: "/dashboard/manage-slots",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageSlots />
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-member",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <ManageMember />
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/dashboard/add-new-forum",
      //   element: (
      //     <PrivateRoute>
      //       <TrainerRoute>
      //         <AddNewForum />
      //       </TrainerRoute>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/dashboard/add-new-class",
        element: (
          <PrivateRoute>
            <TrainerRoute>
              <AddNewClass />
            </TrainerRoute>
          </PrivateRoute>
        ),
      },
      // user dashboard children routes
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
