import { motion } from "framer-motion";
import iskonLogo from "../assets/IskonLogo.webp";

const ImageComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <img src={iskonLogo} alt="iskon" className="object-contain" />
    </motion.div>
  );
};

export default ImageComponent;
