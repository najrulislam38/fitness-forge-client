import { useForm } from "react-hook-form";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddNewForum = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    const title = data?.title;
    const description = data?.desc;

    const forumInfo = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      title,
      description,
    };

    axiosSecure.post("/forums", forumInfo).then((res) => {
      // console.log(res.data);
      if (res.data?.insertedId) {
        reset();
        toast.success("Forum submit successful.");
      }
    });
  };

  return (
    <div>
      <SectionHeader title={"Add Forum"}></SectionHeader>
      <div className="max-w-lg bg-gray-200 p-5 md:p-8 lg:p-12  mx-auto   rounded-xl  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="title">
              TiTle <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Title here..."
              name="title"
              id="title"
              className="text-base"
              {...register("title", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="desc">
              Description <span className="text-sm text-red-600">*</span>
            </label>
            <textarea
              type="text"
              placeholder="Description here"
              id="desc"
              rows={3}
              className="w-full p-3 rounded text-base"
              {...register("desc", { required: true })}
              required
            ></textarea>
          </div>

          <div className=" mt-6">
            <input
              type="submit"
              className="w-full bg-[#FF914D] py-2 mt-3 font-Poppins font-medium hover:bg-[#b66532] rounded duration-300 uppercase"
              value="Add Forum"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewForum;
