import React from 'react';
import { motion } from 'framer-motion';

const animationsFromRight = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};
const AnimatedPageRight = ({ children }) => {
  return (
    <motion.div variants={animationsFromRight} initial="initial" animate="animate"  exit="exit">
      {children}
    </motion.div>
  );
};


export default AnimatedPageRight;
