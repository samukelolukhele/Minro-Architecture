import React, { ChangeEvent, useState } from "react";
import Logo from "../../Logo";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Input from "../../Input";
import Button from "../../Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ",",
  });

  const handleData = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    return setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div className="relative bg-[url(/images/Contact-bg.jpg)] flex items-center justify-center w-full bg-center h-[85vh] bg-cover">
      <div className="absolute bg-black opacity-40 w-full h-full" />
      <div className="relative z-2 flex h-[450px] w-[700px] bg-black">
        <div className="flex flex-col w-5/12 h-full text-white">
          <div className="flex items-center justify-center h-5/6 bg-brand w-full">
            <Logo className="w-[250px]" />
          </div>
          <div className="flex flex-col justify-center items-center justify-evenly px-4 h-1/6 bg-black w-full">
            <div className="flex items-center gap-2 text-xs">
              <AiOutlineMail />
              <p>info@minroarchitecture.co.za</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <BsTelephone />
              <p>+27 81 839 1090</p>
            </div>
          </div>
        </div>
        <div className="w-7/12 h-full bg-bDark">
          <form
            className="w-max h-full mx-10 flex flex-col items-start justify-center gap-6"
            action=""
          >
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <Input placeholder="Name" onChange={handleData} />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <Input placeholder="Email" onChange={handleData} />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label>Message</label>
              <textarea
                className="px-2 py-2 rounded w-full"
                rows={3}
                onChange={handleData}
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="px-6 py-2 bg-brand rounded text-white"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
