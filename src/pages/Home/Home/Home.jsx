import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Features></Features>
        <p>This is home page</p>
      </div>
    </>
  );
};

export default Home;
