import React, { useEffect } from "react";
import Divider from "../../Divider";
import Button from "../../Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container !py-10">
      <div className="mx-4 md:mx-0 my-10  border-2 border-tDark flex justify-center lg:justify-start items-center">
        <div className="text-center lg:text-left py-14 md:m-10 flex justify-center items-center lg:items-start lg:justify-start flex-col md:text-2xl w-11/12 lg:w-7/12 gap-6">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-bold text-4xl md:text-5xl"
          >
            Industry-leading expertise
          </h1>
          <Divider width="w-8/12" />
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-tDark lg:text-base"
          >
            We are proud to provide industry-leading expertise when it comes to
            architecture services. Our highly experienced experts have years of
            experience in the field and a proven track record in award-winning
            designs.
          </p>
          <Button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            color="primary"
            to="/contact"
            className="text-base"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
