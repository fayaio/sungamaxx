import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from './Logo';

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

const navbar = () => {
  return (
    <header className="w-full px-32 py-2  text-logo font-medium flex items-center justify-between">
      <Logo />

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/consultancy" title="Consultancy" className="mx-4" />
        <CustomLink href="/logistics" title="Logistics" className="mx-4" />
        <CustomLink href="/shoevilla" title="Shoe Villa" className="mx-4" />
        <CustomLink href="/kkmarket" title="KK Market" className="ml-4" />
      </nav>
    </header>
  );
};

export default navbar;
