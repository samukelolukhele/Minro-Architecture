import React, { useEffect } from "react";
import Divider from "../../Divider";
import Aos from "aos";
import "aos/dist/aos.css";

const SideSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-10 pb-20 px-4">
      <div className="container">
        <div className="w-full flex items-center justify-center gap-6 flex-col  lg:flex-row lg:justify-between">
          <div className="hidden w-[200px] h-[350px] aspect-spuare lg:inline-block bg-brand mr-[-240px]"></div>
          <img
            src="/images/About-1.webp"
            alt=""
            className="w-full bg-center object-cover lg:w-5/12 h-[600px]"
          />
          <div className="flex flex-col text-center lg:text-left items-center pb-20  gap-4 lg:items-left w-11/12 lg:w-5/12 mx-10 lg:mx-0 lg:items-start">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-4xl font-bold"
            >
              A complete solution for all your needs
            </h1>
            <Divider width="w-8/12" />
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-tDark text-l lg:text-l"
            >
              From initial design through to implementation and completion, our
              team of professionals are here to provide a comprehensive solution
              for all your architecture needs. We can help you create the
              perfect living space for yourself, family, or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
