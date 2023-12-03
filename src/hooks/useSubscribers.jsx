import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSubscribers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: subscribers = [], isPending: isSubscribersLoading } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/subscribers");
      return res.data;
    },
  });
  return [subscribers, isSubscribersLoading];
};

export default useSubscribers;
