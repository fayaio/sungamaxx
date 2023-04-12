/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SLogo from '../../public/images/logos/sunganavlogo.svg';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className=" "
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.8 },
        }}
      >
        <Image src={SLogo} alt="Sungamax" width={80} height={50} />
      </MotionLink>
    </div>
  );
};

export default Logo;
