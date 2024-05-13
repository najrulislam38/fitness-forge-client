import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import { MdOutlineNotAccessible } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <section className="my-20">
      <Container>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div>
            <SectionHeader
              title={"Our Features"}
              subTitle={
                "Whether you want to loose weight, tone up, gain muscle or improve strength, we provide a wide range of classes to help you achieve your goals in a friendly and airy environment."
              }
            ></SectionHeader>
            <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              <div className="feature-card text-center px-5 py-8 border shadow-md ">
                <MdOutlineNotAccessible className="text-5xl f-icon  mx-auto text-[#e48f45] my-6" />
                <h3 className="text-base md:text-xl font-semibold pt-2">
                  No long-term contract
                </h3>
                <p className="py-3 text-sm md:text-base">
                  Our popular month to month plan is offered as pay as you
                  work-out with no longterm contract
                </p>
              </div>
              <div className="feature-card text-center px-5 py-8 border shadow-md ">
                <GoClock className="text-5xl f-icon  mx-auto text-[#e48f45] my-6" />
                <h3 className="text-base md:text-xl font-semibold pt-2">
                  Exercise round the clock
                </h3>
                <p className="py-3 text-sm md:text-base">
                  Take advantage from gym’s benefits 24 hours a day, 7 days a
                  week in each plans available
                </p>
              </div>
              <div className=" feature-card text-center px-5 py-8 border shadow-md ">
                <MdOutlineNotAccessible className="text-5xl f-icon mx-auto text-[#e48f45] my-6" />
                <h3 className="text-base md:text-xl font-semibold pt-2">
                  Best equipment
                </h3>
                <p className="py-3 text-sm md:text-base">
                  Practice on the best equipment global brands that addresses a
                  wide range of people
                </p>
              </div>
              <div className=" feature-card text-center px-5 py-8 border shadow-md ">
                <FaCalendarAlt className="text-5xl f-icon mx-auto text-[#e48f45] my-6" />
                <h3 className="text-base md:text-xl font-semibold pt-2">
                  Flexible Prices
                </h3>
                <p className="py-3 text-sm md:text-base">
                  You can select a training plan, instructor, and schedule
                  suitable for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
