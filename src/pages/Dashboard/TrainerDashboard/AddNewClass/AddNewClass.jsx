import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
// import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewClass = () => {
  // const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res.data);

    if (res.data.success) {
      const classInfo = {
        className: data?.className,
        instructor: data?.instructor,
        duration: data?.duration,
        classImage: res.data.data.display_url,
        price: data?.price,
        rating: data?.rating,
        reviews: data?.reviews,
        description: data?.desc,
      };

      console.log(classInfo);
      const postedClass = await axiosSecure.post("/classes", classInfo);

      if (postedClass.data.insertedId) {
        reset();
        toast.success("Class added successful");
      }
    }
  };

  return (
    <div>
      <SectionHeader title={"Add Class"}></SectionHeader>
      <div className="max-w-lg bg-gray-200 p-5 md:p-8 lg:p-12  mx-auto   rounded-xl  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="className">
              Class Name <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              name="className"
              id="className"
              {...register("className", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="instructor">
              Instructor <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Instructor"
              name="instructor"
              id="instructor"
              {...register("instructor", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="duration">
              Duration <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Duration (Monthly)"
              name="duration"
              id="duration"
              {...register("duration", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="mb-0">
              Image <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="rating">
              Rating <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              id="rating"
              {...register("rating", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="reviews">
              Reviews <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Reviews"
              name="reviews"
              id="reviews"
              {...register("reviews", { required: true })}
              required
            />
          </div>
          <div>
            <label htmlFor="price">
              Price <span className="text-sm text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              {...register("price", { required: true })}
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
              name="desc"
              rows={3}
              className="w-full p-3 rounded text-base"
              {...register("desc", { required: true })}
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="w-full bg-[#FF914D] py-2 mt-3 font-Poppins font-medium hover:bg-[#b66532] rounded duration-300 uppercase"
              value="Applied request"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;
