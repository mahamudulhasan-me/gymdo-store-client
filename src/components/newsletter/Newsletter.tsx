import letter from "../../assets/icon/business.png";
const Newsletter = () => {
  return (
    <section className="border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-12  py-4 ">
        <div className="col-span-3 flex items-end gap-4 border-r border-gray-300 py-2">
          <img src={letter} alt="news letter" className="size-16" />
          <h3 className="uppercase text-lg font-semibold">
            Sign up <br />
            for newsletter
          </h3>
        </div>
        <p className="col-span-4 text-gray-700 flex justify-center items-center text-right">
          Subscribe to the weekly newsletter for all the latest updates
        </p>
        <form className="col-span-5 ml-10 flex justify-center items-center">
          <input
            type="email"
            required
            placeholder="Enter your email..."
            className="bg-gray-100 w-2/3 outline-none h-12 px-5 text-gray-700"
          />
          <button className="bg-black text-white w-1/3 h-12 hover:bg-primary transition-all ease-in-out duration-300 font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
