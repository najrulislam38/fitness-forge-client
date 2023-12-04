import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import OurClasses from "../../Shared/OurClasses/OurClasses";

const Classes = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Classes</title>
      </Helmet>
      <div className="my-10">
        <Container>
          <SectionHeader title={"Our Classes"}></SectionHeader>
          <div>
            <OurClasses />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Classes;
