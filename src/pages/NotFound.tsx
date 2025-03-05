
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HotelLogo from "@/components/HotelLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="hotel-container">
      <motion.div 
        className="hotel-card w-full max-w-xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center">
          <HotelLogo className="w-60 mb-8" />
          
          <h1 className="text-6xl font-bold text-hotel-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Strona nie została znaleziona</p>
          
          <Link 
            to="/"
            className="bg-hotel-blue text-white px-6 py-3 rounded-md hover:bg-hotel-blue/90 transition-colors"
          >
            Powrót do strony głównej
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
