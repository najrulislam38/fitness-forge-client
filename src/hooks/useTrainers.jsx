import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [], isPending: isTrainersPending } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  return [trainers, isTrainersPending];
};

export default useTrainers;
