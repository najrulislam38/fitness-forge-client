import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";

const AdminBalance = () => {
  return (
    <div>
      <SectionHeader title={"Balance"}></SectionHeader>
      <div>
        <div className=" w-full grid gap-4 md:grid-cols-2 my-10">
          <div className="w-full h-[200px] flex justify-center items-center  bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <p className="text-white text-xl md:text-2xl font-Poppins font-semibold">
              Total Remaining Balance: 0
            </p>
          </div>
          <div className="w-full h-[200px] flex justify-center items-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
            <p className="text-white text-xl md:text-2xl font-Poppins font-semibold">
              Total Payment: 0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBalance;
