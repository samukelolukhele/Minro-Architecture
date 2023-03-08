import React from "react";

type BProps = { children: React.ReactNode; color: "primary" | "secondary" };

const Button = ({ color = "primary", children }: BProps) => {
  const handleBtnColor = (color: string) => {
    if (color === "primary") {
      return "bg-brand";
    } else if (color === "secondary") {
      return "bg-black";
    }
  };

  return (
    <button className={`w-[120px] rounded ${handleBtnColor(color)} py-2`}>
      {children}
    </button>
  );
};

export default Button;
