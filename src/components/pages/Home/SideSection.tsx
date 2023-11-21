import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

type SProps = {
  direction: "lg:flex-row" | "lg:flex-row-reverse";
  header: string;
  body: string;
  image: string;
};

const SideSection = ({ direction, header, body, image }: SProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="py-10">
      <div
        className={`container flex flex-col-reverse ${direction} gap-10 items-center md:items-start justify-between`}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col flex-sh lg:w-1/3 px-[40px] md:px-0 items-center md:items-start text-center md:text-left gap-4 my-auto"
        >
          <h3 className="text-4xl md:text-6xl">{header}</h3>
          <hr className="w-full border-[1.5px] border-bDark mb-4" />
          <p className="text-tSecondary text-xl md:text-2xl">{body}</p>
        </div>
        <div
          className="bg-center bg-no-repeat bg-cover h-[60vh] w-full lg:!w-[710px] lg:!h-[530px]"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default SideSection;
