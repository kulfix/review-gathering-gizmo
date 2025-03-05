
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { toast } from "sonner";
import HotelLogo from "@/components/HotelLogo";

const FeedbackForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rating = location.state?.rating || 0;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Navigate to thank you page
    navigate("/thank-you");
  };

  return (
    <div className="hotel-container">
      <motion.div 
        className="hotel-card w-full max-w-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <HotelLogo className="w-72 mb-8" />
          
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={24} 
                className={`${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 max-w-lg"
          >
            <p className="text-lg text-gray-700">
              Chcemy, aby nasi klienci byli w 100% zadowoleni. Daj nam znać, dlaczego miałeś złe doświadczenie, abyśmy mogli poprawić nasze usługi. Zostaw swój adres e-mail, abyśmy mogli się z Tobą skontaktować.
            </p>
          </motion.div>
        </div>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Twoje imię"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Twój e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <div>
            <textarea
              name="feedback"
              placeholder="Recenzja"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows={5}
              className="input-field resize-none"
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button w-full group"
            >
              <span className="submit-button-inner">
                <Check className="mr-2" />
                Wyślij
              </span>
              <span className="submit-button-text">
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
              </span>
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default FeedbackForm;
