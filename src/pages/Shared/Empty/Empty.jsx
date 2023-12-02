import emptyImg from "../../../assets/images/shared/empty.png";
import PropTypes from "prop-types";

const Empty = ({ title }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img src={emptyImg} alt="" className="w-20 md:w-30 lg:w-40 " />
      </div>
      <h3 className="text-lg md:text-2xl lg:text-3xl font-medium text-center ">
        {title}
      </h3>
    </div>
  );
};

Empty.propTypes = {
  title: PropTypes.string,
};

export default Empty;
