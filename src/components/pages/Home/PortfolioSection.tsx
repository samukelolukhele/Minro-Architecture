import React from "react";

const PortfolioSection = () => {
  return (
    <div className="container">
      <div className="w-full pt-20 mb-40 md:h-[700px] grid grid-cols-1 grid-rows-auto md:grid-cols-3 md:grid-row-2 gap-6">
        <img
          src="/images/Portfolio-1.jpg"
          alt=""
          className="md:row-span-2 h-full w-full"
        />
        <img
          src="/images/Portfolio-2.jpg"
          alt=""
          className="md:col-span-2 h-full w-full"
        />
        <img src="/images/Portfolio-3.jpg" alt="" className="h-full w-full" />
        <img src="/images/Portfolio-4.jpg" alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default PortfolioSection;
