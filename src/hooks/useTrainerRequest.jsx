import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTrainerRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: trainerRequests = [], isPending: isTrainerRequestsLoading } =
    useQuery({
      queryKey: ["trainerRequests"],
      queryFn: async () => {
        const res = await axiosSecure.get("/trainerRequest");
        return res.data;
      },
    });
  return [trainerRequests, isTrainerRequestsLoading];
};

export default useTrainerRequest;
