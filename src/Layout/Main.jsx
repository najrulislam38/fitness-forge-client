import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Main = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true);
    setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {initialLoading ? (
        <div>
          <p>Loading....</p>
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
