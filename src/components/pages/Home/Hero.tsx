import React, { useEffect } from "react";
import Button from "../../Button";
import Divider from "../../Divider";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full h-[80vh] md:h-screen bg-fixed bg-[url(/images/hero.jpg)] bg-center bg-cover bg-no-repeat">
      <div className="absolute bg-black opacity-50 h-full w-full z-2"></div>
      <div className="relative container h-full flex items-center justify-center md:justify-start text-center md:text-left z-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:w-[460px] w-min px-4 md:px-0 flex flex-col items-center md:items-start gap-4 text-white"
        >
          <div className="w-10/12 gap-4 md:w-full flex flex-col items-center md:items-start">
            <h1 className="text-6xl font-light">Bring Your Vision To Life.</h1>
            <Divider width="w-10/12 md:w-9/12" />
          </div>
          <p className="font-extralight text-xl md:w-[400px]">
            Our award-winning design team brings years of experience and
            expertise to every project, ensuring that your vision comes to life.
          </p>
          <div className="flex gap-4">
            <Button to="/contact" color="primary">
              Contact
            </Button>
            <Button to="/about" color="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
