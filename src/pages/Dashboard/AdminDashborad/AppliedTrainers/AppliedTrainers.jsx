import { FaEye } from "react-icons/fa6";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useTrainerRequest from "../../../../hooks/useTrainerRequest";
import Loading from "../../../Shared/Loading/Loading";

const AppliedTrainers = () => {
  const [trainerRequests, isTrainerRequestsLoading] = useTrainerRequest();

  //   console.log(trainerRequests);
  if (isTrainerRequestsLoading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionHeader title={"Applied Trainer"}></SectionHeader>
      <div className="my-10">
        <h4 className="font-medium md:text-xl">
          Applied: {trainerRequests?.length}{" "}
        </h4>

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
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {trainerRequests?.map((subscriber, index) => (
                <tr
                  key={subscriber._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th>{index + 1}</th>
                  <td className="px-6 py-4">{subscriber?.name}</td>
                  <td className="px-6 py-4">{subscriber?.email}</td>
                  <td className="px-6 py-4">
                    <button>
                      <FaEye className="text-xl text-[#FF914D]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedTrainers;
