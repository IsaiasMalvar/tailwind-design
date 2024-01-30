/* eslint-disable react/prop-types */

const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`p-5 overflow-y-auto w-full h-full md:w-[50%] lg:w-[35%] bg-white fixed z-50 right-0 top-0 transition duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      <div
        className={`fixed left-0 top-0 z-20 h-full w-full transition duration-150 bg-black opacity-40 ${isOpen ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default Sidebar;
