import React, { useState, useEffect } from "react";
import heroImg from "../assets/H.svg";
import heroImg1 from "../assets/air.svg";
import heroImg2 from "../assets/insti.svg";
import heroImg3 from "../assets/interior.svg";
import heroImg4 from "../assets/restaurant.svg";
import heroImg5 from "../assets/treasure.svg";
import heroImg6 from "../assets/farm.svg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    heroImg,
    heroImg1,
    heroImg2,
    heroImg3,
    heroImg4,
    heroImg5,
    heroImg6,
  ];
  const intervalTime = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sky-200 py-24" id="home">
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
        <article className="sm:block md:block">
          <img
            src={images[currentImageIndex]}
            className="h-80 lg:h-96 rounded-xl "
          />
        </article>
      </div>
    </div>
  );
};
export default Hero;
