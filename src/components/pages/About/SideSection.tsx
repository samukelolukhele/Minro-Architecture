import React from "react";
import Divider from "../../Divider";

const SideSection = () => {
  return (
    <div className="pt-10 pb-20 px-4 md:px-10 lg:px-0">
      <div className="container !px-0">
        <div className="w-full flex items-center justify-center gap-6 flex-col  lg:flex-row lg:justify-between">
          <div className="hidden md:inline-block w-[200px] h-[350px] aspect-spuare lg:inline-block bg-brand mr-[-240px]"></div>
          <img
            src="/images/About-1.jpg"
            alt=""
            className="w-full bg-center object-cover lg:w-5/12 h-[600px]"
          />
          <div className="flex flex-col text-center lg:text-left items-center pb-20  gap-4 lg:items-left w-11/12 lg:w-5/12 mx-10 lg:mx-0 lg:items-start">
            <h1 className="text-4xl font-bold">
              A complete solution for all your needs
            </h1>
            <Divider width="w-8/12" />
            <p className="text-tDark text-l lg:text-2xl">
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
