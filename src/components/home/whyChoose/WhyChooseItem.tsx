const WhyChooseItem = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-8 py-5 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all ease-in-out duration-300">
      <img src={icon} alt="Truck Delivery" className="size-16" />
      <h2 className="text-lg font-semibold capitalize text-gray-700">
        {title}
      </h2>
    </div>
  );
};

export default WhyChooseItem;
