import Container from "../Shared/Container/Container";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/authentication.jpg";

const Login = () => {
  return (
    <div className="w-full bg-gray-200 py-20">
      <Container>
        <div className="w-full text-black flex  items-center bg-white rounded-md">
          <div className="w-2/3 hidden lg:flex justify-center items-center ">
            <img
              src={loginImg}
              alt=""
              className="w-full object-cover lg:rounded-l-md"
            />
          </div>
          <div className="w-full lg:w-1/3 ">
            <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
              <form>
                <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                  Login
                </h3>
                <div className="my-2">
                  <label
                    htmlFor="email"
                    className="block py-1 ml-1 font-medium"
                  >
                    Username or email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full py-2 px-3 border-2 rounded"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="my-2">
                  <label
                    htmlFor="password"
                    className="block py-1 ml-1 font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full py-2 px-3 border-2 rounded"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#FF914D] hover:bg-[#b86735] text-black font-semibold rounded mt-5 mb-6 duration-300"
                >
                  Login
                </button>
              </form>
              <p className="text-gray-600 font-medium text-center my-4 text-sm">
                Do not have an account{" "}
                <Link
                  to={"/register"}
                  className="font-bold text-[#FF914D] hover:text-[#b86735]"
                >
                  Sign Up
                </Link>
              </p>
              <div className="text-center">Or</div>
              <hr />
              <div>
                {/* <div className="flex justify-center items-center ">
                  <BsGoogle
                    onClick={handleSignInWithGoogle}
                    className="text-3xl text-[#008FD4] cursor-pointer hover:text-[#0870A1] "
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
