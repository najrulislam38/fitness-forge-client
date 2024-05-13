import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../Shared/Container/Container";
import OurClasses from "../../Shared/OurClasses/OurClasses";

const FeaturedClasses = () => {
  return (
    <section
      className="my-20"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Container>
        <SectionHeader title={"Featured Classes"}></SectionHeader>
        <div>
          <OurClasses />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedClasses;
