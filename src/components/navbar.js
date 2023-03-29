import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const CustomLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className="h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
      "
      >
        &nbsp;
      </span>
    </Link>
  );
};

const navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <Logo />
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="mx-4" />
        <CustomLink
          href="/properties"
          title="Our Properties"
          className="ml-4"
        />
      </nav>
    </header>
  );
};

export default navbar;
