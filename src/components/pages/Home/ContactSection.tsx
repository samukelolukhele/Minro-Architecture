import React from "react";
import Divider from "../../Divider";
import Button from "../../Button";

const ContactSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[350px] bg-fixed bg-[url(/images/Home-Contact.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute bg-black w-full h-full opacity-80"></div>
      <div className="relative flex flex-col items-center gap-4 z-2 text-white">
        <h4 className="text-4xl w-[600px] text-center">
          Book an appointment with us.
        </h4>
        <Divider width="w-4/12" customStyling="mx-auto" />
        <p className="text-tDark text-center text-xl">
          We look forward to hearing from you
        </p>
        <Button to="/contact" color="primary">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
