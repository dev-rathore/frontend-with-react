import React from "react";

interface ToggleButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  ...props
}) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      {...props}
      type="checkbox"
      className="sr-only peer"
    />
    <div className="
      relative
      w-15
      h-8
      peer-focus:outline-none
      dark:peer-focus:ring-red-900
      rounded-full
      peer 
      dark:bg-yellow-500
      peer-checked:after:translate-x-full
      rtl:peer-checked:after:-translate-x-full
      after:content-['']
      after:absolute after:top-[2px]
      after:start-[2px]
      after:bg-white
      after:rounded-full
      after:h-7
      after:w-7
      after:transition-all
      dark:border-gray-600
      peer-checked:bg-slate-700"
    />
  </label>
);

export default ToggleButton;
