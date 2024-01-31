import { MdKeyboardArrowDown } from "react-icons/md";
import { twMerge } from "tw-merge";
/* eslint-disable react/prop-types */

const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(
          ` appearance-none border border-gray-300 bg-white p-4 w-24 ${className} `
        )}
      >
        <option value={""} disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option} className="p-1">
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute bottom-2 top-0 right-0 flex-center pr-3">
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Select;
