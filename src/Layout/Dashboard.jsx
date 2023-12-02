import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import "./Dashboard.css";
import { FaHome } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { pathname } = useLocation();
  const userDashboardLinks = (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className={pathname === "/dashboard" ? "text-[#FF914D]" : ""}
        >
          <FaHome /> <span>User Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/activity"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaAtlassian /> <span>Activities Log</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/user-profile"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaRegUserCircle /> <span>Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/recommended-classes"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FiCheckCircle /> <span>Recommended Class</span>
        </NavLink>
      </li>
    </>
  );

  const commonDashboardLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaHome /> <span>Home</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Dashboard</title>
      </Helmet>
      <div className="w-full h-full  flex">
        <div className="w-[20%] bg-gray-200 border-r-2 border-gray-400 min-h-screen block overflow-hidden">
          <div className="mt-5 flex justify-center items-center">
            <img src={logo} alt="" className="hidden lg:block w-36" />
          </div>
          <ul className="dashboard-routes w-full ">
            {userDashboardLinks}
            <div className="my-5 lg:text-lg font-medium text-center w-fit mx-auto border-b-2 border-[#FF914D]">
              Common
            </div>
            {commonDashboardLinks}
          </ul>
        </div>
        <div className="flex-1 p-5 md:p-8 lg:p-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
