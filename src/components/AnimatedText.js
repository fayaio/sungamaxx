import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.9,
      staggerChildren: 0.01,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
    duration: 1,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      repeat: Infinity,
      duration: 1.6,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ">
      <motion.h1
        className={`inline-block w-full text-darkPurple font-bold capitalize text-7xl  ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
