import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import AboutUs from "../AboutUs/AboutUs";
import FeaturedClasses from "../FeaturedClasses/FeaturedClasses";
import Blogs from "../Blogs/Blogs";
import Newsletter from "../Newsletter/Newsletter";
import OurTeam from "../../OurTeam/OurTeam";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Features></Features>
        <AboutUs></AboutUs>
        <FeaturedClasses></FeaturedClasses>
        <Testimonials></Testimonials>
        <Blogs></Blogs>
        <Newsletter></Newsletter>
        <OurTeam></OurTeam>
      </div>
    </>
  );
};

export default Home;
