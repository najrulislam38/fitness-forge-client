import { Link, useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { Rating } from "@smastrom/react-rating";

const SingleClass = () => {
  const loadedClass = useLoaderData();
  console.log(loadedClass);

  const {
    className,
    instructor,
    classImage,
    price,
    rating,
    reviews,
    duration,
    description,
  } = loadedClass;

  return (
    <div className="mt-10 mb-10 md:mb-20">
      <Container>
        <SectionHeader title={"Class Details"}></SectionHeader>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 my-10">
          <div className="w-full md:w-1/2">
            <img src={classImage} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="md:text-xl lg:text-2xl uppercase font-medium">
              {className}{" "}
            </h3>
            <p className="italic text-sm">{duration} training progress</p>
            <div className="space-y-1 mt-3 mb-10">
              <h3 className="md:text-lg lg:text-xl ">
                Trainer : <span className="text-slate-800">{instructor}</span>
              </h3>

              <p className="flex items-center gap-1  ">
                <span className="font-medium">Rating:</span>{" "}
                <Rating style={{ maxWidth: 80 }} value={parseInt(rating)} />(
                {reviews})
              </p>
              <p className="text-sm md:text-base">
                <span className="text-slate-800 font-medium">
                  Description :{" "}
                </span>{" "}
                {description}
              </p>
            </div>
            <hr />
            <div>
              <p className="text-black text-lg md:text-xl  ">
                Price:
                <span className=" text-[#FF914D] "> {price} $</span>
              </p>
            </div>
            <div>
              <Link to={"/trainer"}>
                <button className="px-5 text-center py-2 mt-5 bg-[#FF914D] font-medium hover:bg-[#c96f38] duration-300 rounded ">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleClass;
