import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <a href="#">
        <NikeLogo className=" h-20 w-20" />
      </a>
      <button className=" hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 ">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
};

export default Nav;
