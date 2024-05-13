import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./TrainerCard.css";

const TrainerCard = ({ trainer }) => {
  const {
    _id,
    image,
    name,
    experience,
    social_links,
    available_time_in_a_date,
  } = trainer;
  return (
    <div className="border rounded-lg shadow-md trainer-card p-3">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="w-full max-w-sm mx-auto lg:h-[260px] rounded-md"
      />
      <div className="py-5 px-3 space-y-1">
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium font-Poppins">
          {name}
        </h3>
        <p>
          <span className="font-medium text-black">Experience:</span>{" "}
          {experience}
        </p>
        <div>
          <p className="font-medium text-black">Available Slot:</p>
          <ul>
            {available_time_in_a_date?.map((slot, index) => (
              <li key={index} className="list-none border py-2">
                Slot-{index + 1}: {slot}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 justify-center items-center mt-5 text-2xl text-[#FF914D] ">
            <Link to={social_links?.facebook}>
              <FaFacebook className="hover:text-blue-500" />
            </Link>
            <Link to={social_links?.twitter}>
              <FaTwitter className="hover:text-blue-600" />
            </Link>
            <Link to={social_links?.instagram}>
              <FaInstagram className="hover:text-red-500" />
            </Link>
            <Link to={social_links?.linkedin}>
              <FaLinkedin className="hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <Link to={`/trainer/${_id}`}>
          <button className="mb-5 mt-8 flex gap-2 items-center w-fit mx-auto font-semibold text-[#FF914D]">
            <FaArrowRight />
            <span>Know More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

TrainerCard.propTypes = {
  trainer: PropTypes.object,
};

export default TrainerCard;
