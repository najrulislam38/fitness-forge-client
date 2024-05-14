import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClassCard = ({ classInfo }) => {
  //   console.log(classInfo);
  const { _id, className, classImage, price, rating, reviews, duration } =
    classInfo;
  return (
    <Link to={`/classes/${_id}`}>
      <div className="border curser-pointer hover:scale-105 hover:relative duration-300">
        <img src={classImage} alt="" className="w-full" />
        <div className="p-5">
          <h3 className="md:text-xl lg:text-2xl uppercase">{className} </h3>
          <p className="italic text-sm">{duration} training progress</p>

          <div className="flex items-center gap-1 mt-3 mb-10">
            <span className="font-medium">Rating:</span>{" "}
            <Rating style={{ maxWidth: 80 }} value={parseInt(rating)} />(
            {reviews})
          </div>
          <hr />
          <div>
            <p className="text-black text-lg md:text-xl  ">
              Price:
              <span className=" text-[#FF914D] "> {price} $</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

ClassCard.propTypes = {
  classInfo: PropTypes.object,
};

export default ClassCard;
