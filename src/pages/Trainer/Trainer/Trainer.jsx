import Container from "../../Shared/Container/Container";
import PageCover from "../../Shared/PageCover/PageCover";
import Trainers from "../Trainers/Trainers";
import { Helmet } from "react-helmet-async";
import backgroundImg from "../../../assets/images/Trainer/trainer-page-cover.jpg";
import { Link } from "react-router-dom";

const Trainer = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Trainer </title>
      </Helmet>
      <div>
        <PageCover backgroundImg={backgroundImg} title={"Trainers"}></PageCover>
        <Container>
          <Trainers />
          <div className="text-center mb-20">
            <Link to={"/be-a-trainer"}>
              <button className="py-2 px-3 bg-[#FF914D] hover:bg-[#b66532] rounded font-medium  lg:text-lg duration-300 uppercase">
                {" "}
                Be A Trainer
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Trainer;
