
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import HotelLogo from "@/components/HotelLogo";

const ThankYou = () => {
  const location = useLocation();
  const formData = location.state?.formData || null;
  
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
          <HotelLogo className="w-72 mb-10" />
          
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
            className="text-lg text-gray-600 mb-8"
          >
            Twoja opinia jest dla nas bardzo ważna i pomoże nam poprawić jakość naszych usług.
          </motion.p>
          
          {formData && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="w-full max-w-md mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100"
            >
              <h3 className="text-lg font-medium text-gray-700 mb-4 text-left">Informacje z formularza:</h3>
              
              <div className="space-y-2 text-left">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={20} 
                        className={`${star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{formData.rating} {formData.rating === 1 ? 'gwiazdka' : formData.rating < 5 ? 'gwiazdki' : 'gwiazdek'}</span>
                </div>
                
                <p className="text-gray-600"><span className="font-medium">Imię:</span> {formData.name || "—"}</p>
                <p className="text-gray-600"><span className="font-medium">Email:</span> {formData.email || "—"}</p>
                <p className="text-gray-600"><span className="font-medium">Telefon:</span> {formData.phone || "—"}</p>
                
                {formData.feedback && (
                  <div className="mt-3">
                    <p className="font-medium text-gray-700">Recenzja:</p>
                    <p className="text-gray-600 mt-1 italic">{formData.feedback}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
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
