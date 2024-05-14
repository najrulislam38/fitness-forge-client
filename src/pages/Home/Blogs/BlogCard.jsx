import PropTypes from "prop-types";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { image, title, description, posted_date, author } = blog;

  return (
    <div className="border blog-card shadow-md cursor-pointer image-hover:scale-110  overflow-hidden duration-500">
      <div>
        <img src={image} alt="" className="image" />
      </div>
      <div className="p-5 space-y-2">
        <p className="text-sm font-medium">
          Post by {author?.name}and posted date {posted_date}
        </p>
        <h3 className="text-base md:text-xl font-medium">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
