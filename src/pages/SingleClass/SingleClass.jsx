import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";

const SingleClass = () => {
  const loadedClass = useLoaderData();
  console.log(loadedClass);
  return (
    <div>
      <Container>
        <h1>single class page</h1>
      </Container>
    </div>
  );
};

export default SingleClass;
