import PropTypes from "prop-types";
import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const ForumCard = ({ forum }) => {
  const { user } = useAuth();
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const { name, image, title, description } = forum;

  //   console.log(like);
  //   console.log(disLike);

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-5 bg-gray-300 rounded-lg">
      <div className="w-full md:w-1/4 flex-1">
        <div className="w-24 h-24">
          <img
            src={image}
            alt=""
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="font-medium pt-2">{name}</h3>
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="font-medium text-base md:text-lg mb-1">{title}</h3>
        <p>{description}</p>
        {user && (
          <div className="flex items-center gap-4 text-xl my-3">
            <button onClick={() => setLike(!like)}>
              {like ? <AiFillLike className="text-[#FF914D]" /> : <BiLike />}
            </button>
            <button onClick={() => setDisLike(!disLike)}>
              {disLike ? (
                <AiFillDislike className="text-[#FF914D]" />
              ) : (
                <BiDislike />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ForumCard.propTypes = {
  forum: PropTypes.object,
};

export default ForumCard;
