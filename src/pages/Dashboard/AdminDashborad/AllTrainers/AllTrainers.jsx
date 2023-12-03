import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import useTrainers from "../../../../hooks/useTrainers";
import { Card, Typography } from "@material-tailwind/react";
import Loading from "../../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const AllTrainers = () => {
  const [trainers, isTrainersPending] = useTrainers();

  if (isTrainersPending) {
    return <Loading />;
  }

  return (
    <div>
      <SectionHeader title={"All Trainers"}></SectionHeader>
      <div className="my-10">
        <h4 className="font-medium md:text-xl">
          Trainers: {trainers?.length}{" "}
        </h4>

        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="text-sm font-medium text-slate-800">
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray">
                    No.
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray">
                    name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray">
                    Email
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray">
                    Payment Status
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray">
                    Payment
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {trainers?.map((trainer, index) => {
                const isLast = index === trainers.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={trainer?._id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trainer?.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trainer?.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trainer?.status ? trainer.status : "Pending"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {trainer?.status?.toLowerCase() ===
                      "Paid".toLowerCase() ? (
                        <p className="text-red-500 font-medium">Paid</p>
                      ) : (
                        <Link>
                          <button className=" px-3 py-1 bg-[#FF914D] text-black text-sm  font-semibold rounded">
                            Pay
                          </button>
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AllTrainers;
