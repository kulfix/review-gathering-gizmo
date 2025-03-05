
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import HotelLogo from "@/components/HotelLogo";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hotel-container">
      <motion.div 
        className="hotel-card w-full max-w-xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center">
          <HotelLogo className="w-60 mb-8" />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.2
            }}
            className="mb-6"
          >
            <CheckCircle size={80} className="text-green-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          >
            Dziękujemy za Twoją opinię!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 mb-10"
          >
            Twoja opinia jest dla nas bardzo ważna i pomoże nam poprawić jakość naszych usług.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link 
              to="/"
              className="bg-hotel-blue text-white px-6 py-3 rounded-md hover:bg-hotel-blue/90 transition-colors"
            >
              Powrót do strony głównej
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
