const SectionHead = ({ title }: { title: string }) => {
  return (
    <div className="relative flex flex-col justify-center items-center mb-10">
      <h1 className="text-center text-slate-900 font-semibold text-3xl capitalize tracking-wide">
        {title}
      </h1>
      <div className="w-24 h-0.5 bg-primary"></div>
    </div>
  );
};

export default SectionHead;
