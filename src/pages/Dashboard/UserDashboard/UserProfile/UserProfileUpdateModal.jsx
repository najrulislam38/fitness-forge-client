import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import PropTypes from "prop-types";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserProfileUpdateModal = ({ isEdit, setIsEdit }) => {
  const { user, updateUserProfile } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      console.log(data?.name, res.data.data.display_url);
      updateUserProfile(data?.name, res.data.data.display_url)
        .then(() => {
          reset();
          toast.success("Profile Update successful.");
          setIsEdit(!isEdit);
        })
        .catch((error) => {
          toast.error(`${error.message}`);
        });
    }
  };

  return (
    <div>
      <div
        id="authentication-modal"
        aria-hidden="true"
        tabIndex={-1}
        className={`${
          !isEdit ? "hidden" : ""
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative mx-auto mt-10 p-4 w-full max-w-md max-h-full ">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-slate-500">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Update Your Profile
              </h3>
              <button
                onClick={() => setIsEdit(!isEdit)}
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                action="#"
              >
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    {...register("image", { required: true })}
                    // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"\
                    className="text-sm"
                    placeholder="name here"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name here"
                    {...register("name", { required: true })}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>

                <div className="text-center mb-10">
                  <button
                    type="submit"
                    className="  bg-[#FF914D] font-medium hover:bg-[#c96f38] focus:ring-4 focus:outline-none focus:ring-[#FF914D]  rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit mx-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfileUpdateModal.propTypes = {
  isEdit: PropTypes.bool,
  setIsEdit: PropTypes.func,
};

export default UserProfileUpdateModal;
