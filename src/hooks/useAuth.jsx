import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const allAuthentication = useContext(AuthContext);
  return allAuthentication;
};

export default useAuth;
