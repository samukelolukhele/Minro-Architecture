import React from "react";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import Divider from "./Divider";

type MProps = {
  bgClick: React.MouseEventHandler<HTMLDivElement>;
  close: React.MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ bgClick, close }: MProps) => {
  return (
    <div className="w-screen flex items-center justify-center h-screen fixed z-[100]">
      <div
        className="fixed bg-black opacity-70 w-full h-full h-[200vh] cursor-pointer"
        onClick={bgClick}
      />
      <div className="relative p-20 z-20  bg-black text-white w-10/12 lg:w-5/12 text-center border-brand border-2 flex flex-col items-center gap-8">
        <div
          className="absolute top-[-15px] right-[-15px] p-2 bg-brand hover:bg-brandHover rounded-full cursor-pointer"
          onClick={close}
        >
          <AiOutlineClose className="text-white text-2xl" />
        </div>
        <Logo />
        <Divider />
        <p>
          Thank you for getting in contact with us. Our team will reply to you
          via email shortly.
        </p>
      </div>
    </div>
  );
};

export default Modal;
