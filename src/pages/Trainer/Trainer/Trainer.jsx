import Container from "../../Shared/Container/Container";
import PageCover from "../../Shared/PageCover/PageCover";
import Trainers from "../Trainers/Trainers";
import { Helmet } from "react-helmet-async";
import backgroundImg from "../../../assets/images/Trainer/trainer-page-cover.jpg";

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
        </Container>
      </div>
    </>
  );
};

export default Trainer;
