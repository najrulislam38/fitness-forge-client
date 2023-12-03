import { Link } from "react-router-dom";
import errorImage from "../../assets/images/Error-page/error-image.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl max-h-screen mx-auto px-5 md:px-10 py-4">
      <div className="w-full flex justify-center ">
        <img
          src={errorImage}
          alt="error image"
          className="w-5/6 md:w-3/5 lg:w-[500px] object-cover"
        />
      </div>
      <div className="text-center">
        <Link to={"/"}>
          <button className="bg-[#FF914D]  mt-3 font-Poppins font-medium hover:bg-[#b66532] rounded duration-300 py-2 px-5 ">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
