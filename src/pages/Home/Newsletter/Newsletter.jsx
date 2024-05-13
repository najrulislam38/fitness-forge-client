import toast from "react-hot-toast";
import Container from "../../Shared/Container/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const Newsletter = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;

    const subscriberInfo = {
      name,
      email,
    };

    axiosPublic
      .post("/subscribers", subscriberInfo)
      .then((res) => {
        // console.log(res.data);
        if (res?.data?.insertedId) {
          toast.success("subscription successful.");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section
      className="my-20"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="300"
      data-aos-duration="400"
      data-aos-easing="ease-in-sine"
    >
      <Container>
        <div className="w-full border-4 border-dashed p-10">
          <h2 className="test-xl md:text-2xl lg:text-3xl font-semibold text-center uppercase">
            Subscribe To Our Newsletter
          </h2>
          <div className="py-8 text-center">
            <form onSubmit={handleSubscribe}>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter Name"
                className="border p-2 border-gray-500 lg:w-[250px] outline-none  "
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                defaultValue={user?.email}
                className="border p-2 border-gray-500 lg:w-[250px] outline-none "
                readOnly
              />
              <input
                type="submit"
                value="Subscribe"
                className="p-2 bg-[#FF914D] font-medium border border-[#FF914D] hover:bg-[#e48f45] cursor-pointer disabled:opacity-70"
                disabled={`${user?.email ? "" : "disabled"}`}
              />
            </form>
          </div>
          <small className="text-center block text-gray-700">
            If you want to know our latest updates, please subscribe
          </small>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
