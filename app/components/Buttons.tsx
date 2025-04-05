"use client";

import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      className={`w-full max-w-[314.5px] h-[44px] rounded-md bg-[#9B59B6] text-white 
                  font-poppins font-semibold text-[14px] md:text-lg px-6 py-3 
                  flex items-center justify-center gap-2 transition-all duration-300 
                  hover:bg-[#3A1052] focus:ring-[#9B59B6] active:bg-[#7D3C98] ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </button>

 
  );
};

export default Button;
