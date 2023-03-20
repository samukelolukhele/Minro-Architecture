import React from "react";
import Divider from "../../Divider";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const slides = [
  {
    image: "/images/Testimonial-1.jpg",
    title: "Great Experience",
    message:
      "I recently had the pleasure of working with Minro Architecture and they exceeded all my expectations. The team was so professional, creative and knowledgeable.",
    author: "Mary Ellsworth",
  },
  {
    image: "/images/Testimonial-2.jpg",
    title: "Phenomenal Work",
    message:
      "I've built many high to low end homes and regardless of which type of house I'm building, I always use Minro's services. They always provide me with a consistently breathtaking result. Highly recommend! ",
    author: "Jeremy Gill",
  },
  {
    image: "/images/Testimonial-3.jpg",
    title: "Just Amazing",
    message:
      "We wanted to redesign our office so we decided to hire Minro Architecture. Words cannot describe how happy we are with their work.",
    author: "Anna Hughes",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-max bg-brand py-20 ">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-max gap-2 flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-white text-center text-extralight">
              Our Happy Clients
            </p>
            <Divider width="w-11/12" border="border-white" />
          </div>
          <Slider
            previousButton={<IoArrowBackCircleOutline />}
            nextButton={<IoArrowForwardCircleOutline />}
            classNames={{
              slider: "slider !h-[500px] md:!h-[276px]",
              previousButton: "previousButton !text-white !text-4xl !left-0",
              nextButton: "nextButton !text-white !text-4xl !right-0",
            }}
            infinite={true}
          >
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="w-10/12 text-white text-center md:text-left gap-4 flex flex-col md:flex-row justify-between items-center inner">
                  <img
                    src={slide.image}
                    className="w-[200px] aspect-square rounded-full bg-center object-cover"
                    alt=""
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col items-center md:items-start w-max gap-2">
                      <h3 className="font-bold text-3xl">{slide.title}</h3>
                      <Divider border="border-white" width="w-10/12" />
                    </div>
                    <div className="flex flex-col gap-4 text-l">
                      <p className="font-extralight">{slide.message}</p>
                      <p className="font-extralight">{slide.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
