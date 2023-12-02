import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useAuth from "../../../../hooks/useAuth";
import UserProfileUpdateModal from "./UserProfileUpdateModal";
import { useState } from "react";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=" w-full min-h-[70vh]">
      <SectionHeader title={"User Profile"}></SectionHeader>
      <div className="w-full flex justify-center items-center ">
        <div className=" mt-6 p-5 md:py-10 md:px-16 bg-gray-200 rounded-md">
          <div>
            <img
              src={user?.photoURL}
              className="w-40 h-40 rounded-full mb-5"
              alt=""
            />
          </div>
          <h2 className="text-base md:text-xl my-2">
            {" "}
            <span className="text-slate-900 font-medium">Name: </span>{" "}
            {user?.displayName}
          </h2>
          <p>
            <span className="text-slate-900 font-medium">Email: </span>{" "}
            {user?.email}
          </p>
          <button
            onClick={() => setIsEdit(!isEdit)}
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="px-5 text-center py-2 mt-5 bg-[#FF914D] font-medium hover:bg-[#c96f38] duration-300 rounded "
          >
            Edit Profile
          </button>
          <UserProfileUpdateModal isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
