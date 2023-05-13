import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full  mt-auto border-t-2 border-solid
    text-lg 
    
    "
    >
      <Layout
        className="p-8 w-full text-sm padding !flex !text-center! h-fit text-darkgrey bg-footerbg !items-center justify-between !self-center 
       text-pcolor  font-mont md:flex-col md:text-center sm:text-xs "
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved </span>

        <Link href="/" className="md:pt-4">
          Sungamax Nigeria Ltd
        </Link>

        <div className=""></div>
      </Layout>
    </footer>
  );
};

export default Footer;
