import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import img1 from "../../../assets/images/Testimonial/testimonial-1.jpg";
import img2 from "../../../assets/images/Testimonial/testimonial-2.jpg";
import img3 from "../../../assets/images/Testimonial/testimonial-3.jpg";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Container>
          <SectionHeader title={"Testimonials"}></SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="p-5 text-center"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="300"
              data-aos-duration="400"
              data-aos-easing="ease-in-sine"
            >
              <div className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] mx-auto rounded-full overflow-hidden">
                <img src={img1} alt="" className=" object-cover " />
              </div>
              <p className="text-black mt-7 mb-4 text-sm md:text-base">
                I love how easy it is to track my workouts with Fitness Forge.
                The accuracy is spot-on, and the goal-setting feature keeps me
                pushing my limits. It is like having a personal coach on my
                wrist!
              </p>
              <h3 className="font-medium text-lg">- Emily Prity</h3>
            </div>
            <div
              className="p-5 text-center"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="300"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] mx-auto rounded-full overflow-hidden">
                <img src={img2} alt="" className=" object-cover " />
              </div>
              <p className="text-black mt-7 mb-4 text-sm md:text-base">
                I love how easy it is to track my workouts with Fitness Forge.
                The accuracy is spot-on, and the goal-setting feature keeps me
                pushing my limits. It is like having a personal coach on my
                wrist!
              </p>
              <h3 className="font-medium text-lg">- John Wike</h3>
            </div>
            <div
              className="p-5 text-center"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="300"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] mx-auto rounded-full overflow-hidden">
                <img src={img3} alt="" className="h-full object-cover " />
              </div>
              <p className="text-black mt-7 mb-4 text-sm md:text-base">
                I love how easy it is to track my workouts with Fitness Forge.
                The accuracy is spot-on, and the goal-setting feature keeps me
                pushing my limits. It is like having a personal coach on my
                wrist!
              </p>
              <h3 className="font-medium text-lg">- Chris Warson</h3>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;
