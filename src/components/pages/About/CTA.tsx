import React from "react";
import Button from "../../Button";

const CTA = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-screen lg:h-[90vh] bg-[url(/images/About-2.jpg)] flex items-center justify-center bg-center bg-fixed bg-cover bg-no-repeat">
      <div className="absolute bg-black w-full h-full opacity-30"></div>
      <div className="relative z-4 w-11/12 lg:w-4/12 aspect-square lg:aspect-auto lg:py-24 border-brand border-2 flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-white text-4xl text-center lg:w-6/12">
          Let’s Make Something Beautiful.
        </h1>
        <Button to="/" color="primary">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default CTA;
