import React from 'react';
import { motion } from 'framer-motion';

const SpinningCircle = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',  // Adjust size as needed
        height: '300px', // Adjust size as needed
        marginTop: '-150px',  // Offset to perfectly center
        marginLeft: '-150px', // Offset to perfectly center
        borderRadius: '50%',  // Make it a circle
        background: 'conic-gradient(#0e0c0a, #7f7f7f40)',  // Two-color gradient
      }}

    >
      {/* Optional: Add content or leave it empty */}
    </motion.div>
  );
};

export default SpinningCircle;
