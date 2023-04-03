import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-lightPurple absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-lightPurple absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-28 py-2  text-logo font-medium flex items-center justify-between relative lg:px-13 lg:py-2 sm:px-10 
    sm:py-2
    "
    >
      {/* Sungamax Heading */}
      <div className="flex  mr-[40px] sm:ml-[40px]">
        <Logo />
      </div>

      {/* Hamburger Menu */}
      <button
        className="flex-col justify-center items-center hidden  lg:flex lg:items-end "
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-darkblock transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>

      {/* Nav Menu */}
      <div className="w-full flex flex-col justify-end items-end lg:hidden">
        <nav className="flex ml-[120px] pl-8">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="#" title="Consultancy" className="mx-4" />
          <CustomLink href="#" title="Logistics" className="mx-4" />
          <CustomLink href="#" title="Shoe Villa" className="mx-4" />
          <CustomLink href="#" title="KK Market" className="ml-4" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="#"
              title="Consultancy"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="#"
              title="Logistics"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="#"
              title="Shoe Villa"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="#"
              title="KK Market"
              className=""
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
