import React, { ChangeEvent, useState } from "react";

const Random: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddOption = () => {
    if (inputValue.trim() !== '' && !dropdownOptions.includes(inputValue)) {
      setDropdownOptions([...dropdownOptions, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !dropdownOptions.includes(inputValue)) {
      handleAddOption();
      setSelectedOptions([...selectedOptions, inputValue]);
    }
  };

  const handleClickOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!selectedOptions.includes(e.currentTarget.textContent as string)) {
      setSelectedOptions([...selectedOptions, e.currentTarget.textContent as string]);
    }
  }

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="w-64 rounded-full py-4 px-8 bg-white relative">
          <div
            className="text-white"
          >
            {selectedOptions.map((option, index) => (
              <div className="flex justify-between bg-green-700 cursor-pointer my-1" key={index}>
                <div>{option}</div>
                <div onClick={() => handleRemoveOption(option)}>X</div>
              </div>
            ))}
          </div>
          <input
            className="text-black"
            type="text"
            name="textp-input"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter new option"
            onKeyDown={handleKeyDown}
            onFocus={() => setDropdownVisibility(true)}
            // onBlur={() => setDropdownVisibility(false)}
          />
          {dropdownVisibility && <div
            onClick={() => setDropdownVisibility(true)}
            onMouseEnter={() => setDropdownVisibility(true)}
            onMouseLeave={() => setDropdownVisibility(false)}
            className="absolute md-rounded bg-white"
            style={{
              top: '60px',
              left: '0',
              width: '100%',
              height: '100px',
              overflowY: 'scroll',
            }}
          >
            {dropdownOptions.map((option, index) => (
              <div
                className="flex justify-between bg-blue-700 cursor-pointer my-1"
                key={index}
                onClick={(e) => handleClickOption(e)}
              >
                <div>{option}</div>
              </div>
            ))}
          </div>}
        </div>
        
        <button className="bg-white rounded-full mt-4 py-3 text-black">Add</button>
      </div>
    </div>
  );
}

export default Random;
