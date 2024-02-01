/* eslint-disable react/prop-types */
import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { twMerge } from "tw-merge";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = ({ onClickShoppingBtn }) => {
  const [isMobileMenSHown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className=" z-10 relative flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className=" h-20 w-20 dark:fill-white " />
      </a>
      <button
        className=" dark:text-gray-400 dar:hover:text-gray-700 lg:hidden hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 "
        onClick={() => setIsMobileMenuShown(!isMobileMenSHown)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenSHown && "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="lg:dark:text-white lg:space-x-4 flex flex-col lg:flex-row  border-gray-100 text-lg border bg-gray-50 lg:bg-transparent lg:border-transparent rounded-lg p-5 lg:[&>li:nth-last-child(-n+2)]:text-white lg:dark:[&>li:nth-last-child(-n+4)]:text-white ">
          {ROUTES.map((route) => {
            return (
              <li
                className={twMerge(
                  ` rounded lg:dark:text-white  first:bg-blue-500 lg:first:text-blue-400 lg:hover:bg-transparent lg:first:bg-transparent lg:hover:text-blue-500 lg:[&:nth-last-child(-n+2):text-red] lg:dark:[&:nth-last-child(-n+4):text-white]   text-white [&:not(:first-child)]:hover:bg-gray-100 lg:[&:not(:first-child)]:hover:bg-transparent  lg:[&:not(:first-child)]:hover:text-blue-500 [&:not(:first-child)]:text-black cursor-pointer py-2 px-3 `
                )}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={onClickShoppingBtn}
        className="fixed bottom-4 left-4 lg:static  lg:mr-8"
      >
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer btn-press-anim ">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
