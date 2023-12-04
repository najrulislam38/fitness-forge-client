import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../Shared/Loading/Loading";
import Container from "../../Shared/Container/Container";
import ForumCard from "../ForumCard/ForumCard";
import { Helmet } from "react-helmet-async";

const Community = () => {
  const axiosPublic = useAxiosPublic();

  const { data: forums = [], isPending } = useQuery({
    queryKey: ["forum"],
    queryFn: async () => {
      const res = await axiosPublic.get("/forums");
      return res.data;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  //   console.log(forums);
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Community</title>
      </Helmet>
      <div className="my-10">
        <Container>
          <SectionHeader title={"Community"}></SectionHeader>
          <div className="grid gap-6 lg:grid-cols-2">
            {forums?.map((forum) => (
              <ForumCard key={forum._id} forum={forum}></ForumCard>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Community;
