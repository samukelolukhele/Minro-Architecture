import React from "react";
import Divider from "../../Divider";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sapiente suscipit nemo illo saepe? Eius inventore maxime perferendis adipisci aliquam, sapiente autem nam ducimus, iste, dicta laudantium ipsum optio cumque!",
    author: "Jeremy Gill",
  },
  {
    image: "/images/Testimonial-2.jpg",
    title: "Phenomenal Work",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sapiente suscipit nemo illo saepe? Eius inventore maxime perferendis adipisci aliquam, sapiente autem nam ducimus, iste, dicta laudantium ipsum optio cumque!",
    author: "Jeremy Gill",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-max bg-brand py-20 ">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-max gap-2 flex flex-col justify-center items-center">
            <p className="text-3xl text-white text-center text-extralight">
              Our Happy Clients
            </p>
            <Divider width="w-11/12" border="border-white" />
          </div>
          <Slider classNames={{ slider: "slider !h-[276px]" }} infinite={true}>
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="w-10/12 text-white gap-4 flex justify-between items-center inner">
                  <img
                    src={slide.image}
                    className="w-[200px] aspect-square rounded-full bg-center object-cover"
                  />
                  <div className="flex flex-col justify-center align-center">
                    <div className="flex flex-col w-max gap-2">
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
