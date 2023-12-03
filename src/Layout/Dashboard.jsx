import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import "./Dashboard.css";
import { FaAtlassian } from "react-icons/fa6";
import {
  FaRegUserCircle,
  FaExternalLinkAlt,
  FaHome,
  FaListUl,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaWallet } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useTrainer from "../hooks/useTrainer";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();
  const { pathname } = useLocation();

  const adminDashboardLinks = (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className={pathname === "/dashboard" ? "text-[#FF914D]" : ""}
        >
          <FaHome /> <span>Admin Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/all-subscribers"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaAtlassian /> <span>All Subscribers</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/all-trainers"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaExternalLinkAlt /> <span>All Trainers</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/applied-trainers"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaListUl /> <span>Applied Trainers</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/admin-balance"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaWallet /> <span>Balance</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/add-new-forum"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FiCheckCircle /> <span>Add New Forum</span>
        </NavLink>
      </li>
    </>
  );

  const trainerDashboardLinks = (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className={pathname === "/dashboard" ? "text-[#FF914D]" : ""}
        >
          <FaHome /> <span>Trainers Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/manage-slots"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaAtlassian /> <span>Manage Slots</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/manage-member"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FaListUl /> <span>Manage Member</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/add-new-forum"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <FiCheckCircle /> <span>Add New Forum</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/add-new-class"}
          className={({ isActive }) => (isActive ? "text-[#FF914D]" : "")}
        >
          <IoMdAddCircleOutline /> <span>Add New Class</span>
        </NavLink>
      </li>
    </>
  );
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

  // console.log(isAdmin);
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Dashboard</title>
      </Helmet>
      <div className="w-full h-full  flex">
        <div className="max-w-[20%] flex-1 bg-gray-200 border-r-2 border-gray-400 min-h-screen block overflow-hidden">
          <div className="mt-5 flex justify-center items-center">
            <img src={logo} alt="" className="hidden lg:block w-36" />
          </div>
          <ul className="dashboard-routes w-full ">
            {isAdmin
              ? adminDashboardLinks
              : isTrainer
              ? trainerDashboardLinks
              : userDashboardLinks}
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
