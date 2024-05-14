import { useQuery } from "@tanstack/react-query";
import Container from "../../Shared/Container/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BlogCard from "./blogCard";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  return (
    <section
      className="my-20"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="300"
      data-aos-duration="300"
      data-aos-easing="ease-in-sine"
    >
      <Container>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-Poppins font-semibold uppercase ">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {blogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
