import React from "react";
import Hero from "./Hero";
import BoldTextSection from "./BoldTextSection";
import SideSection from "./SideSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <BoldTextSection
        mainText="Experience that you can trust"
        minorText="We Provide"
      />
      <SideSection
        header="What we do"
        direction="lg:flex-row"
        body="Our goal is to make sure that you get the best possible outcome from
        your project, whether it's a residential building or a commercial
        space."
        image="/images/Side-Section-1.webp"
      />
      <SideSection
        header="How we do it"
        direction="lg:flex-row-reverse"
        body="With our expertise in both traditional and modern architecture, we can provide a comprehensive range of services that will meet your exact requirements."
        image="/images/Side-Section-2.webp"
      />
      <BoldTextSection
        mainText="Dreams we brought to life"
        minorText="Our Portfolio"
      />
      <PortfolioSection />
      {/* <ContactSection /> */}
    </>
  );
};

export default Home;
