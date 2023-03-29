import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 text-logo flex items-center justify-center text-2xl font-bold"
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.8 },
        }}
      >
        Sungamax
      </MotionLink>
    </div>
  );
};

export default Logo;
