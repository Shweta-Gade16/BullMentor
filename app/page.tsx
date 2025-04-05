"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Check, ArrowLeft } from "lucide-react";
import "./globals.css";
import Button from "./components/Buttons";

const Signup: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = useCallback((role: "mentor" | "trader") => {
    setSelectedRole(role);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F4F4F4] px-4">
      <div className="w-full max-w-[917px] rounded-lg p-10 md:p-20 space-y-10 bg-white flex flex-col items-center">
     
        <Image src="/logo.png" alt="Logo" width={232} height={58} priority />

        <div className="w-full max-w-[757px] space-y-10 flex flex-col items-center">
          <div className="w-full text-center space-y-4">
            <h2 className="text-[#324A6D] font-poppins font-semibold text-2xl md:text-[30px] leading-tight">
              Select Your Role to Continue
            </h2>
            <p className="text-[#324A6D] font-poppins font-normal text-sm md:text-[16px] leading-[24px]">
              Choose whether you want to join as a Trader or a Mentor.
            </p>
          </div>

          <div className="w-full flex flex-wrap gap-6 justify-center">
          
            <RoleCard
              role="mentor"
              selectedRole={selectedRole}
              handleRoleSelect={handleRoleSelect}
              title="I'm a Mentor"
              description="Offer mentorship sessions and share your expertise."
              buttonText="Continue as Mentor"
            />

            <RoleCard
              role="trader"
              selectedRole={selectedRole}
              handleRoleSelect={handleRoleSelect}
              title="I'm a Trader"
              description="Learn from top trading mentors and enhance your trading skills."
              buttonText="Continue as Trader"
            />
          </div>

          <button className="flex items-center gap-2 text-[#324A6D] font-poppins font-semibold text-[14px] leading-[20px] mt-6">
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

interface RoleCardProps {
  role: "mentor" | "trader";
  selectedRole: string | null;
  handleRoleSelect: (role: "mentor" | "trader") => void;
  title: string;
  description: string;
  buttonText: string;
}

const RoleCard: React.FC<RoleCardProps> = ({
  role,
  selectedRole,
  handleRoleSelect,
  title,
  description,
  buttonText,
}) => {
  return (
    <div
      className="w-full max-w-[362.5px] rounded-lg border border-[#324A6D3D] p-6 flex flex-col gap-5 cursor-pointer"
      onClick={() => handleRoleSelect(role)}
      role="button"
      aria-label={`Select ${role.charAt(0).toUpperCase() + role.slice(1)} Role`}
    >
    
      <div
        className={`w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#324A6D40] transition ease-out duration-300 ${
          selectedRole === role ? "bg-[#1A237E] border-none" : ""
        }`}
      >
        {selectedRole === role && <Check size={20} color="white" strokeWidth={3} />}
      </div>

      <h2 className="text-[#324A6D] font-poppins font-semibold text-2xl md:text-[30px] leading-tight">
        {title}
      </h2>
      
      <p className="text-[#324A6D] font-poppins font-normal text-sm md:text-[16px] leading-[24px]">
        {description}
      </p>
      <div className="mt-6">
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default Signup;
