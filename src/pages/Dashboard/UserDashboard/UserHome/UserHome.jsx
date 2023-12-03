import useAdmin from "../../../../hooks/useAdmin";
import useAuth from "../../../../hooks/useAuth";
import useSubscribers from "../../../../hooks/useSubscribers";
import useTrainer from "../../../../hooks/useTrainer";
import useTrainerRequest from "../../../../hooks/useTrainerRequest";
import useTrainers from "../../../../hooks/useTrainers";
import Loading from "../../../Shared/Loading/Loading";

const UserHome = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isTrainer, isTrainerLoading] = useTrainer();
  const [subscribers] = useSubscribers();
  const [trainers] = useTrainers();
  const [trainerRequests] = useTrainerRequest();
  const { user } = useAuth();

  if (isAdminLoading || isTrainerLoading) {
    return <Loading />;
  }

  console.log(isTrainer);

  return (
    <div>
      {isAdmin ? (
        <>
          <h1 className="text-center font-semibold text-lg md:text-xl lg:text-3xl">
            Welcome {user?.displayName} !
          </h1>
          <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
            <div className="w-full h-[200px] flex justify-center items-center  bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <p className="text-white text-xl md:text-2xl font-Poppins font-semibold">
                Subscribers: {subscribers?.length}
              </p>
            </div>
            <div className="w-full h-[200px] flex justify-center items-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
              <p className="text-white text-xl md:text-2xl font-Poppins font-semibold">
                Subscribers: {trainers?.length}
              </p>
            </div>
            <div className="w-full h-[200px] flex justify-center items-center  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">
              <p className="text-white text-xl md:text-2xl font-Poppins font-semibold">
                Subscribers: {trainerRequests?.length}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center font-semibold text-lg md:text-xl lg:text-3xl">
          Welcome {user?.displayName} !
        </h1>
      )}
    </div>
  );
};

export default UserHome;
