import React from "react";

type SProps = {
  direction: "md:flex-row" | "md:flex-row-reverse";
  header: string;
  body: string;
  image: string;
};

const SideSection = ({ direction, header, body, image }: SProps) => {
  return (
    <div className="py-10">
      <div
        className={`container flex flex-col-reverse ${direction} gap-10 md:gap-[10rem] items-center md:items-start justify-between`}
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-center gap-4 w-[300px] my-auto">
          <h3 className="text-5xl">{header}</h3>
          <hr className="w-full border-[1.5px] border-bDark mb-4" />
          <p className="text-tSecondary text-xl">{body}</p>
        </div>
        <img
          className="bg-center object-cover w-full h-[50vh] md:h-full"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SideSection;
