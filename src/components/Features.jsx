const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      {" "}
      <video
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
        src={src}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50"></div>
      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Explore the Zentry Universe
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>
      </div>
      <div className="border-hsla mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </div>
    </section>
  );
};

export default Features;
