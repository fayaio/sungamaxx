import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const handleClick = () => {
  toggle();
  router.push(href);
};

const DaisyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-whitee  z-50 sticky top-0">
      <div className="flex self-end justify-between font-medium ">
        <div className="pl-16 z-50 md:w-full md:pl-6 md:flex md:justify-between">
          <Logo />
          <button className="m-9 msd:hidden  " onClick={handleClick}>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              } `}
            ></span>
          </button>
        </div>

        <ul className=" flex mr-12 !font-semi-bold gap-8 text-logo text-[15.7px]  md:hidden font-semibold">
          <NavLinks />
          <li className="">
            <Link
              href={'/contact'}
              className="py-[35px] px-3 inline-block uppercase hover:text-lightPurple"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* mobile.nav */}
        <ul
          className={`
          text-logo
          text-lg
          msd:hidden
          bg-whitee
          absolute
          w-full
          h-fit
          
          py-24 pl-5 duration-500 ${isOpen ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <NavLinks />
          <li className="">
            <Link
              href={'/contact'}
              className="py-7 px-3 inline-block uppercase sm:!text-base "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DaisyNavBar;
