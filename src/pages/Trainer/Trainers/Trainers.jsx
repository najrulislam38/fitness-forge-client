import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useTrainers from "../../../hooks/useTrainers";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const [trainers] = useTrainers();

  return (
    <div
      className="my-20"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <SectionHeader title={"Our Trainer"}></SectionHeader>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trainers?.map((trainer) => (
          <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
