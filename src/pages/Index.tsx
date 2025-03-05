
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { toast } from "sonner";
import HotelLogo from "@/components/HotelLogo";

const Index = () => {
  const navigate = useNavigate();
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStarClick = (rating: number) => {
    // Animate before navigating
    setIsAnimating(true);
    
    setTimeout(() => {
      if (rating === 5) {
        // Redirect to Google Reviews for 5-star ratings
        window.location.href = "https://g.page/r/CbTwvNvOZ4y0EB0/review";
      } else {
        // For 1-4 stars, go to internal feedback form
        navigate("/feedback", { state: { rating } });
      }
    }, 400);

    // Show feedback toast
    if (rating === 5) {
      toast.success("Dziękujemy! Przekierowujemy do Google...", {
        duration: 2000,
      });
    } else {
      toast.info(`Wybrałeś ${rating} ${rating === 1 ? 'gwiazdkę' : rating < 5 ? 'gwiazdki' : 'gwiazdek'}`, {
        duration: 2000,
      });
    }
  };

  return (
    <div className="hotel-container">
      <motion.div 
        className="hotel-card w-full max-w-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <motion.div 
          className="flex flex-col items-center text-center"
          animate={isAnimating ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        >
          <HotelLogo className="w-72 mb-8" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Twoj kod rabatowy to:
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-2xl font-bold text-hotel-blue">
              wczasowa8_vip
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12 max-w-md"
          >
            <p className="text-xl md:text-2xl text-gray-700">
              Opowiedz nam jak było Ci w naszym hotelu
            </p>
          </motion.div>
          
          <motion.div 
            className="star-rating flex items-center justify-center space-x-4 md:space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                className="star-item relative"
                onHoverStart={() => setHoveredStar(star)}
                onHoverEnd={() => setHoveredStar(null)}
                onClick={() => handleStarClick(star)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                <Star 
                  size={hoveredStar !== null && star <= hoveredStar ? 48 : 40} 
                  strokeWidth={1.5}
                  className={`transition-all duration-300 ease-out ${
                    hoveredStar !== null && star <= hoveredStar ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
