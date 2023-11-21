import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PortfolioSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container lg:!pb-20" id="portfolio-container">
      <div className="w-full [&>*]:bg-center [&>*]:bg-no-repeat [&>*]:bg-cover h-[1200px] lg:!h-[600px] grid grid-cols-1 md:grid-cols-3 md:grid-row-2 gap-6">
        <div
          className="bg-black md:row-span-2"
          style={{ backgroundImage: "url(/images/Portfolio-1.webp)" }}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor="#portfolio-container"
        />
        <div
          className="bg-black md:col-span-2"
          style={{ backgroundImage: "url(/images/Portfolio-2.webp)" }}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-anchor="#portfolio-container"
        />
        <div
          className="bg-black"
          style={{ backgroundImage: "url(/images/Portfolio-3.webp)" }}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-anchor="#portfolio-container"
        />
        <div
          className="bg-black"
          style={{ backgroundImage: "url(/images/Portfolio-4.webp)" }}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-anchor="#portfolio-container"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
