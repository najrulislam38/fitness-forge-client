import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Shared/Container/Container";
import authenticationImage from "../../assets/images/authentication.jpg";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then(() => {
      updateUserProfile(data?.name, data?.photo).then(() => {
        const userInfo = {
          name: data?.name,
          email: data?.email,
          role: "member",
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data?.insertedId) {
            reset();
            toast.success("Your account created successful.");
            navigate("/");
          }
        });
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Fitness Forge | Register</title>
      </Helmet>
      <div className="w-full bg-gray-200 py-20">
        <Container>
          <div className="w-full text-black flex  items-center bg-white rounded-md">
            <div className="w-2/3 h-full hidden lg:flex justify-center items-center ">
              <img
                src={authenticationImage}
                alt=""
                className="h-full w-auto object-cover lg:rounded-l-md"
              />
            </div>
            <div className="w-full lg:w-1/3 ">
              <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                    Register
                  </h3>
                  <div className="my-2">
                    <label
                      htmlFor="name"
                      className="block py-1 ml-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      {...register("name", { required: true })}
                      className="w-full py-2 px-3 border-2 rounded"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="text-red-500  text-sm">
                        Name field is required
                      </span>
                    )}
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="photo"
                      className="block py-1 ml-1 font-medium"
                    >
                      Photo URL
                    </label>
                    <input
                      type="photo"
                      name="photo"
                      id="photo"
                      {...register("photo", { required: true })}
                      className="w-full py-2 px-3 border-2 rounded"
                      placeholder="Photo URL"
                    />
                    {errors.photo && (
                      <span className="text-red-500  text-sm">
                        Photo URL field is required
                      </span>
                    )}
                  </div>
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
                      {...register("email", { required: true })}
                      className="w-full py-2 px-3 border-2 rounded"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Email field is required
                      </span>
                    )}
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
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                      })}
                      className="w-full py-2 px-3 border-2 rounded"
                      placeholder="Password"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-500 text-sm">
                        Password field is required
                      </p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500  text-sm">
                        Password should have at least 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-500  text-sm">
                        Password should have more than or equal 20 characters.
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-500 max-w-sm  text-sm">
                        Password should have at least one uppercase, one
                        lowercase and one specific character.
                      </p>
                    )}
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
                    to={"/login"}
                    className="font-bold text-[#FF914D] hover:text-[#b86735]"
                  >
                    Please Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
