import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../Shared/Container/Container";
import "./BeATrainer.css";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeATrainer = () => {
  const { user } = useAuth();
  const [selectedSkillsValues, setSelectedSkillsValues] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    setSelectedSkillsValues((prevSelectedSkillsValues) => {
      if (prevSelectedSkillsValues.includes(value)) {
        return prevSelectedSkillsValues.filter((option) => option !== value);
      } else {
        return [...prevSelectedSkillsValues, value];
      }
    });
  };

  const onSubmit = async (data) => {
    // console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);

    if (res.data.success) {
      const trainerRequestInfo = {
        name: data.name,
        email: user?.email,
        age: data?.age,
        image: res.data.data.display_url,
        skills: selectedSkillsValues,
        timeInADay: data.timeInADay,
        timeInAWeek: data.timeInAWeek,
      };
      //
      const trainerRequest = await axiosSecure.post(
        "/trainerRequest",
        trainerRequestInfo
      );
      // console.log(trainerRequest.data);
      if (trainerRequest.data.insertedId) {
        // show success popup
        reset();
        toast.success(`${data.name}, your request send has been successful.`);
      }
    }
  };

  // console.log(selectedSkillsValues);

  return (
    <div className="mt-10 mb-20">
      <Container>
        <div className="my-10">
          <SectionHeader title={"Be A Trainer"}></SectionHeader>
        </div>
        <div className="w-full">
          <div className="max-w-lg bg-gray-200 p-5 md:p-8 lg:p-12  mx-auto   rounded-xl  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <label htmlFor="name">
                  Full Name <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  {...register("name", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user?.email}
                  id="email"
                  {...register("email", { required: true })}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="age">
                  Age <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  id="age"
                  {...register("age", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="mb-0">
                  Image <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  {...register("image", { required: true })}
                  id="image"
                />
              </div>
              {/* skills */}
              <div>
                <p className="font-medium text-black">
                  {" "}
                  Skills <span className="text-sm text-red-600">*</span>
                </p>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="meditation"
                      value="Meditation"
                      onChange={handleCheckboxChange}
                      checked={selectedSkillsValues.includes("Meditation")}
                      className="mr-2"
                    />
                    Meditation
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="yoga"
                      value="Yoga"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                      checked={selectedSkillsValues.includes("Yoga")}
                    />
                    Yoga
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="cardio"
                      value="Cardio"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                      checked={selectedSkillsValues.includes("Cardio")}
                    />
                    Cardio
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="pilates"
                      value="Pilates"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                      checked={selectedSkillsValues.includes("Pilates")}
                    />
                    Pilates
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="timeInAWeek">
                  Available time in a week{" "}
                  <span className="text-gray-600 text-sm">(hr)</span>
                  <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Available time in a week"
                  name="timeInAWeek"
                  id="timeInAWeek"
                  {...register("timeInAWeek", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="timeInADay">
                  Available time in a day{" "}
                  <span className="text-gray-600 text-sm">(hr)</span>{" "}
                  <span className="text-sm text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Available time in a day"
                  name="timeInADay"
                  id="timeInADay"
                  {...register("timeInADay", { required: true })}
                  required
                />
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
      </Container>
    </div>
  );
};

export default BeATrainer;
