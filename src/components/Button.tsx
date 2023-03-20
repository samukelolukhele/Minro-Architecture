import React from "react";
import { Link } from "react-router-dom";

type BProps = {
  children: React.ReactNode;
  color: "primary" | "secondary";
  to: string;
  className?: string;
};

const Button = ({ color = "primary", children, className, to }: BProps) => {
  const handleBtnColor = (color: string) => {
    if (color === "primary") {
      return "bg-brand hover:bg-brandHover";
    } else if (color === "secondary") {
      return "bg-dark hover:bg-darkHover";
    }
  };

  return (
    <Link
      to={to}
      className={`w-[120px] text-center ease-in duration-300 hover:scale-[1.1] rounded text-white ${className} ${handleBtnColor(
        color
      )} py-2`}
    >
      {children}
    </Link>
  );
};

export default Button;
