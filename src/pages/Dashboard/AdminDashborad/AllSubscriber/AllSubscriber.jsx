import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useSubscribers from "../../../../hooks/useSubscribers";
import Loading from "../../../Shared/Loading/Loading";

const AllSubscriber = () => {
  const [subscribers, isSubscribersLoading] = useSubscribers();

  if (isSubscribersLoading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionHeader title={"All Subscribers"}></SectionHeader>
      <div className="my-10">
        <h4 className="font-medium md:text-xl">
          Subscribers: {subscribers?.length}{" "}
        </h4>

        <div className="w-full overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Subscriber Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Subscriber email
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers?.map((subscriber, index) => (
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

export default AllSubscriber;
