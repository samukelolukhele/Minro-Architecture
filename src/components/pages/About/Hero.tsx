import React from "react";
import Divider from "../../Divider";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-0">
      <div className=" my-10 container border-2 border-tDark flex justify-center lg:justify-start items-center">
        <div className="text-center lg:text-left py-14 md:m-10 flex justify-center items-center lg:items-start lg:justify-start flex-col md:text-2xl w-11/12 lg:w-7/12 gap-6">
          <h1 className="font-bold text-4xl md:text-5xl">
            Industry-leading expertise
          </h1>
          <Divider width="w-8/12" />
          <p className="text-tDark text-l">
            We are proud to provide industry-leading expertise when it comes to
            architecture services. Our highly experienced experts have years of
            experience in the field and a proven track record in award-winning
            designs.
          </p>
          <Button color="primary" to="/contact">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
