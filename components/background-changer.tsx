"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundChanger: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/slideimg1.png", "/slideimg2.png", "/slideimg3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundChanger;


