import Link from 'next/link';
import React from 'react';

const navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/properties">Our Properties</Link>
      </nav>
    </header>
  );
};

export default navbar;
