
import React from "react";
import { motion } from "framer-motion";

interface HotelLogoProps {
  className?: string;
}

const HotelLogo: React.FC<HotelLogoProps> = ({ className = "" }) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/18aca6ca-1791-4843-b6ff-23edde962ec5.png" 
          alt="Wczasowa8 Apartments" 
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
};

export default HotelLogo;
