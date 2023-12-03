import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../Shared/Loading/Loading";
import useAuth from "../../../../hooks/useAuth";

const ManageMember = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: members = [], isPending } = useQuery({
    queryKey: [user?.email, "member"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      // console.log(res.data);

      if (res?.data) {
        const filterMembers = res.data.filter(
          (member) => member?.role === "member"
        );

        return filterMembers;
      }
    },
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <SectionHeader title={"Manage Member"}></SectionHeader>
      <div className="my-10">
        <h4 className="font-medium md:text-xl">Members: {members?.length} </h4>

        <div className="w-full overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {members?.map((subscriber, index) => (
                <tr
                  key={subscriber._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th>{index + 1}</th>
                  <td className="px-6 py-4">{subscriber?.name}</td>
                  <td className="px-6 py-4">{subscriber?.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMember;
