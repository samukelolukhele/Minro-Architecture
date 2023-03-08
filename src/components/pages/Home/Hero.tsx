import React from "react";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] bg-fixed bg-[url(/images/hero.jpg)] bg-center bg-cover bg-no-repeat">
      <div className="absolute bg-black opacity-50 h-full w-full z-2"></div>
      <div className="relative container h-full flex items-center z-10">
        <div className="w-[460px] flex flex-col gap-4 text-white">
          <h1 className="text-6xl font-light">Bring Your Vision To Life.</h1>
          <hr className="w-[360px] border-[1.5px] border-brand mb-4" />
          <p className="font-extralight text-xl w-[400px]">
            Our award-winning design team brings years of experience and
            expertise to every project, ensuring that your vision comes to life.
          </p>
          <div className="flex gap-4">
            <Button color="primary">Contact</Button>
            <Button color="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
