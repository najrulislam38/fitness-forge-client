import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Main = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true);
    // setTimeout(() => {
    //   setInitialLoading(false);
    // }, 2000);
    window.addEventListener("load", () => {
      setInitialLoading(false);
    });
  }, []);
  return (
    <>
      {initialLoading ? (
        <div>
          <div className="w-full h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF914D] relative -top-10"></div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <div className="min-h-[26vh]">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
