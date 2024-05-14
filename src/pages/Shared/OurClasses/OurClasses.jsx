import useClass from "../../../hooks/useClass";
import Loading from "../Loading/Loading";
import ClassCard from "./ClassCard";

const OurClasses = () => {
  const [classes, isClassPending] = useClass();
  if (isClassPending) {
    return <Loading />;
  }
  return (
    <div className="my-10 grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {classes?.map((classInfo) => (
        <ClassCard key={classInfo._id} classInfo={classInfo}></ClassCard>
      ))}
    </div>
  );
};

export default OurClasses;
