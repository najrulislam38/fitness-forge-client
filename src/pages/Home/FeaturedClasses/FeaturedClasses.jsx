import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import OurClasses from "../../Shared/OurClasses/OurClasses";

const FeaturedClasses = () => {
  return (
    <section className="my-20">
      <Container>
        <SectionHeader title={"Featured Classes"}></SectionHeader>
        <OurClasses />
      </Container>
    </section>
  );
};

export default FeaturedClasses;
