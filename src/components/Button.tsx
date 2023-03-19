import React from "react";
import { Link } from "react-router-dom";

type BProps = {
  children: React.ReactNode;
  color: "primary" | "secondary";
  to: string;
};

const Button = ({ color = "primary", children, to }: BProps) => {
  const handleBtnColor = (color: string) => {
    if (color === "primary") {
      return "bg-brand";
    } else if (color === "secondary") {
      return "bg-black";
    }
  };

  return (
    <Link
      to={to}
      className={`w-[120px] text-center rounded text-white ${handleBtnColor(
        color
      )} py-2`}
    >
      {children}
    </Link>
  );
};

export default Button;
