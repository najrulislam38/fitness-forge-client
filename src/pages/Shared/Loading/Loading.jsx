import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader size={50} color="#FF914D" />
    </div>
  );
};

export default Loading;
