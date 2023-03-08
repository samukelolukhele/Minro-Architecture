import React from "react";

type SProps = {
  direction: "flex-row" | "flex-row-reverse";
  header: string;
  body: string;
  image: string;
};

const SideSection = ({ direction, header, body, image }: SProps) => {
  return (
    <div className="py-10">
      <div
        className={`container flex ${direction} gap-[10rem] justify-between`}
      >
        <div className="flex flex-col gap-4 w-[300px] my-auto">
          <h3 className="text-5xl">{header}</h3>
          <hr className="w-full border-[1.5px] border-bDark mb-4" />
          <p className="text-tSecondary text-xl">{body}</p>
        </div>
        <img className="bg-center bg-cover w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default SideSection;
