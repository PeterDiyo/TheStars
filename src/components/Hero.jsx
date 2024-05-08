import heroImg from "../assets/H.svg";

const Hero = () => {
  return (
    <div className="bg-sky-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Flexible</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Solutions that you need
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            explore our remarkable services. we are here to provide quality
            service
          </p>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96 rounded-xl " />
        </article>
      </div>
    </div>
  );
};
export default Hero;
