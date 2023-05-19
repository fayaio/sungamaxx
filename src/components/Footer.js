import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
AiFillInstagram;
const Footer = () => {
  return (
    <footer
      className="w-full  mt-auto border-t-2 border-solid
    text-lg 
    
    "
    >
      <div
        className="p-8 w-full  padding !flex !text-center! h-fit text-darkgrey  bg-gray-100 !items-center justify-between !self-center 
       text-pcolor  font-light text-sm  font-mont md:flex-col md:text-center sm:text-xs "
      >
        <div className="flex flex-col">
          <div className="md:pt-4  flex flex-row gap-1">
            <Link href={''}> Privacy Policy </Link>|
            <Link href={''}> Cookie Policy</Link>|
            <Link href={''}> Refund Policy</Link>
          </div>
          <span className="pt-4">Sungamax Nigeria Ltd Copyright&copy; </span>
        </div>

        <div className="flex gap-3 text-xl md:pt-4">
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
