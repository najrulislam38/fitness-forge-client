import Container from "../../Shared/Container/Container";

const Newsletter = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="w-full border-4 border-dashed p-10">
          <h2 className="test-xl md:text-2xl lg:text-3xl font-semibold text-center uppercase">
            Subscribe To Our Newsletter
          </h2>
          <div className="py-8 text-center">
            <form>
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
                className="border p-2 border-gray-500 lg:w-[250px] outline-none "
              />
              <input
                type="submit"
                value="Subscribe"
                className="p-2 bg-[#FF914D] font-medium border border-[#FF914D] hover:bg-[#e48f45] cursor-pointer"
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
