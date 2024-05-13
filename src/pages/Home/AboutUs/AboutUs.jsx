import Container from "../../Shared/Container/Container";
import aboutImg1 from "../../../assets/images/About/about-img-1.jpg";
import aboutImg2 from "../../../assets/images/About/about-img-2.jpg";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <section className="my-20">
      <Container>
        <div className=" flex flex-col lg:flex-row gap-16 overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex gap-5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={aboutImg1}
              alt=""
              loading="lazy"
              className="object-cover w-1/2"
            />
            <img
              src={aboutImg2}
              alt=""
              loading="lazy"
              className="object-cover w-1/2 relative top-8"
            />
          </div>
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          >
            <SectionHeader title={"About us"}></SectionHeader>
            <p className="text-sm md:text-base mb-6">
              Empowering your fitness journey with precision tracking,
              personalized insights, and a vibrant community. We are more than a
              tracker; we are your wellness companion, supporting every step
              toward a healthier, happier you.
            </p>
            <p className="text-sm md:text-base mb-6">
              This also meant we needed to provide a learning environment run by
              experienced and successful coaches. However, our most important
              goal was to create a welcoming atmosphere and community in which
              everyone feels a sense of belonging.
            </p>
            <div className="md:py-10 grid md:grid-cols-3 gap-5">
              <div>
                <p className="font-Poppins">Environment</p>
                <h4 className="text-lg font-medium"> Clear and Air</h4>
              </div>
              <div>
                <p className="font-Poppins">Classes</p>
                <h4 className="text-lg font-medium"> Every Level People</h4>
              </div>
              <div>
                <p className="font-Poppins">Price</p>
                <h4 className="text-lg font-medium">Affordable</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
