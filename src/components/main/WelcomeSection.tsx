const WelcomeSection = ({ hotelName }: { hotelName: string }) => {
  return (
    <section className="flex flex-col gap-1 py-6">
      <p className="font-inter uppercase text-[10px] text-[#A3A3A3] font-bold leading-3.5 tracking-[2px]">
        Welcome
      </p>
      <h2 className="font-playfair text-[#182543] text-3xl font-normal leading-9 tracking-tight ">
        Welcome to <span className="text-[#C5A667]">{hotelName}</span>
      </h2>
      <div className="flex gap-1.5 font-inter items-center">
        <span className="rounded-full bg-[#C5A66720] text-[#C5A667] text-[6.6px] font-bold leading-4 flex items-center justify-center w-4 h-4">
          402
        </span>
        <p className="text-[11.1px] leading-4 text-[#A3A3A3]">
          Room 402 · Check-out Dec 25
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
