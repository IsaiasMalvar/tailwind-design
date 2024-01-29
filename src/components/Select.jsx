import { MdKeyboardArrowDown } from "react-icons/md";
/* eslint-disable react/prop-types */

const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 bg-white p-4"
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
      <div className="absolute bottom-2 top-0 right-0 flex-center pr-3">
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Select;
