import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid
    text-lg
    "
    >
      <Layout className="py-8 flex text-darkGrey !bg-footerbg items-center justify-between  font-light text-base font-mont">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved </span>

        <Link href="/">Sungamax Nigeria Ltd</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
