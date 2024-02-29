import React, { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement>{
  items: string[];
  label: string;
  labelStartEnhancer?: React.ReactNode;
  showSelectedOptionInLabel?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  label,
  labelStartEnhancer,
  showSelectedOptionInLabel,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(items[0]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  }

  const onOptionSelectHandler = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  }

  return (
    <div className="cursor-pointer">
      <div
        className="flex items-center gap-2"
        onMouseEnter={() => handleMouseEnter()}
      >
        {labelStartEnhancer} {label} {showSelectedOptionInLabel ? selectedOption : ''}
      </div>
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className={`
            absolute
            top-2
            right-0
            shadow-md
            bg-black
            p-4
            rounded-md
            flex
            flex-col
            gap-4
            transition-all
            duration-300
            ease-in-out
            ${isDropdownOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          {
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span className="w-2">{selectedOption === item ? <PiCheckBold color="white" /> : ''}</span>
                <span
                  className={`w-20 font-bold text-slate-400 cursor-pointer p-2 rounded-md text-black hover:text-slate-100 ${selectedOption === item ? 'text-slate-100' : ''}`}
                  onClick={() => onOptionSelectHandler(item)}
                >
                  {item}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
