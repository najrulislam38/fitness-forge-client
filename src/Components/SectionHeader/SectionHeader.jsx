import PropTypes from "prop-types";
import "./SectionHeader.css";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className="section-title  text-xl md:text-2xl lg:text-3xl font-Poppins text-center font-semibold uppercase ">
        {title}
      </h2>
      <p className="mt-7 max-w-4xl mx-auto text-center text-sm md:text-base">
        {subTitle}
      </p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
