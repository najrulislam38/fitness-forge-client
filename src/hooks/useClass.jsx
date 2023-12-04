import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data: classes = [], isPending: isClassPending } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
      return res.data;
    },
  });
  return [classes, isClassPending];
};

export default useClass;
