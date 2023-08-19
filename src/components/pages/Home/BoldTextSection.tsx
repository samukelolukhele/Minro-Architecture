import React from "react";

const BoldTextSection = ({ minorText = "", mainText = "" }) => {
  return (
    <div className="flex flex-col gap-2 text-center justify-center items-center py-10 px-4 md:px-0">
      <p className=" text-tDark">{minorText}</p>
      <h1 className="text-5xl md:text-6xl md:w-[600px]">{mainText}</h1>
    </div>
  );
};

export default BoldTextSection;
