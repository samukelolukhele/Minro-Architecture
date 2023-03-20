import React, { useState } from "react";
import Logo from "../../Logo";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Input from "../../Input";
import Modal from "../../Modal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ",",
  });

  const [modal, setModal] = useState(false);

  const handleData = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    return setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setModal(true);

    //TODO: Add mailing function
  };

  const closeModal = () => setModal(false);

  return (
    <div className="relative overflow-y-scroll bg-[url(/images/Contact-bg.jpg)] flex items-center justify-center w-full bg-center h-screen md:min-h-screen md:h-auto py-10 bg-cover">
      {modal && <Modal close={closeModal} bgClick={closeModal} />}
      <div className="absolute opacity-40 w-full h-full bg-black" />
      <div className="relative z-2 flex flex-col-reverse gap-10 md:gap-0 md:flex-row md:h-[450px] w-10/12 lg:w-[700px] ">
        <div className="flex flex-col md:w-5/12 h-full text-white">
          <div className="rounded-t-lg md:rounded-none flex items-center justify-center py-8 md:py-0 md:h-5/6 bg-brand w-full">
            <Logo className="w-[250px]" />
          </div>
          <div className="rounded-b-lg md:rounded-none flex flex-col justify-center items-center justify-evenly px-4 py-4 md:py-0 md:h-1/6 bg-black w-full">
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
        <div className="rounded md:rounded-none py-12 px-8 md:px-0 md:py-0 md:w-7/12 h-full bg-bDark">
          <form className="w-max h-full mx-auto md:mx-10 flex flex-col items-start justify-center gap-6">
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
              className="px-6 py-2 bg-brand hover:bg-brandHover hover:scale-[1.1] rounded text-white"
              type="submit"
              onClick={handleSubmit}
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
