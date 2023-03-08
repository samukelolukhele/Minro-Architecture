import React from "react";

const BoldTextSection = ({ minorText = "", mainText = "" }) => {
  return (
    <div className="flex flex-col gap-2 text-center justify-center items-center py-10">
      <p className=" text-tDark">{minorText}</p>
      <h1 className="text-6xl w-[600px]">{mainText}</h1>
    </div>
  );
};

export default BoldTextSection;
