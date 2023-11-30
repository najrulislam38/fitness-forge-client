import { Parallax } from "react-parallax";
import PropTypes from "prop-types";
import Container from "../Container/Container";

const PageCover = ({ backgroundImg, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={backgroundImg}
      bgImageAlt="Page image"
      strength={200}
    >
      <div className={`hero h-[600px] py-20`}>
        <Container>
          <div
            className={`w-full mx-auto px-5 h-5/6  bg-black bg-opacity-60 py-20  mt-20   hero-content text-center  text-white`}
          >
            <div className="w-full">
              <h1 className=" text-xl md:text-3xl lg:text-6xl font-cinzel font-semibold uppercase">
                {title}
              </h1>
              {/* <p className="mb-5 text-sm md:text-base font-cinzel ">{details}</p> */}
            </div>
          </div>
        </Container>
      </div>
    </Parallax>
  );
};

PageCover.propTypes = {
  backgroundImg: PropTypes.any,
  title: PropTypes.any,
};

export default PageCover;
