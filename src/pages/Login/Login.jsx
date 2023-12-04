import Container from "../Shared/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/authentication.jpg";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import googleLogo from "../../assets/images/google-logo.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { loginUser, loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const move = location?.state?.from?.pathname || "/";

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        toast.success("Login Successful.");
        console.log(result.user);
        navigate(move);
      })
      .catch(() => {
        toast.error("username or password is invalid.");
        // console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        const user = {
          name: res?.user?.displayName,
          email: res?.email,
          role: "member",
        };

        axiosPublic
          .post("/users", user)
          .then((res) => {
            console.log(res.data);
            navigate(move);
            if (res?.data?.insertedId > 0) {
              toast.success("new user login successful");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Fitness Forge | Login</title>
      </Helmet>
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
                <form onSubmit={handleLoginUser}>
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
                    Please Register
                  </Link>
                </p>
                <div className="text-center">Or</div>
                <hr />
                <div className=" my-5 ">
                  <div
                    onClick={handleLoginWithGoogle}
                    className="flex  justify-between items-center max-w-[300px] mx-auto border rounded-full py-1 px-3 cursor-pointer"
                  >
                    <span className="text-medium font-Poppins">
                      Login With Google
                    </span>
                    <img src={googleLogo} alt="" className="w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
