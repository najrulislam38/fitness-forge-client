import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import OurClasses from "../../Shared/OurClasses/OurClasses";

const Classes = () => {
  return (
    <div className="my-10">
      <Container>
        <SectionHeader title={"Our Classes"}></SectionHeader>
        <div>
          <OurClasses />
        </div>
      </Container>
    </div>
  );
};

export default Classes;
