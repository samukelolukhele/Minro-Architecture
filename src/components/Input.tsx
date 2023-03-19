import React from "react";

type IProps = {
  className?: string;
  onChange: any;
  placeholder: string;
};

const Input = ({ className, onChange, placeholder }: IProps) => {
  return (
    <input
      className={`rounded py-2 px-2 w-[300px] focus:border-tDark ${className}`}
      onChange={onChange}
      placeholder={placeholder}
      name={placeholder.toLowerCase()}
      required
    ></input>
  );
};

export default Input;
