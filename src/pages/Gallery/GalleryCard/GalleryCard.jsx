import PropTypes from "prop-types";

const GalleryCard = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        alt=""
        loading="lazy"
        className="h-[220px] w-full object-cover"
      />
    </div>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.any,
};

export default GalleryCard;
