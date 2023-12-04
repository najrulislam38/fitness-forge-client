import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Container from "../Shared/Container/Container";

const SingleTrainer = () => {
  const trainerInfo = useLoaderData();
  console.log(trainerInfo);
  const {
    name,
    email,
    age,
    image,
    experience,
    skills,
    available_time_in_a_date,
    social_links,
    train_category,
    price,
  } = trainerInfo;
  return (
    <div className="my-10">
      <Container>
        <SectionHeader title={"Trainer Information"}></SectionHeader>
        <div className="grid gap-10 md:grid-cols-2 ">
          <div>
            <img src={image} alt="" className="w-full" />
            <div></div>
          </div>
          <div>
            <h3 className="md:text-xl lg:text-2xl">
              Trainer's Name: <span className="text-slate-700">{name}</span>
            </h3>
            <div>
              <h3>Available slots. </h3>
              <ul>
                {available_time_in_a_date?.map((slot, index) => (
                  <li
                    key={index}
                    className="list-none border py-2 cursor-pointer mt-5 w-fit"
                  >
                    Slot-{index + 1}: {slot}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleTrainer;
