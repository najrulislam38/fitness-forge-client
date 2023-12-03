import { PropTypes } from "prop-types";
import useAuth from "../hooks/useAuth";
import useTrainer from "../hooks/useTrainer";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Shared/Loading/Loading";
import useAdmin from "../hooks/useAdmin";

const TrainerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isTrainer, isTrainerLoading] = useTrainer();
  const [isAdmin] = useAdmin();
  const location = useLocation();

  if (loading || isTrainerLoading) {
    return <Loading />;
  }

  if (location.pathname === "/dashboard/add-new-forum") {
    if ((user && isTrainer) || (user && isAdmin)) {
      return children;
    }
  }
  if (user && isTrainer) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

TrainerRoute.propTypes = {
  children: PropTypes.node,
};

export default TrainerRoute;
