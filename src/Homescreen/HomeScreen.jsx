import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div className="flex md:flex-row flex-col items-center justify-center">
        <ImageComponent />
        <motion.div className="flex items-center flex-col gap-10">
          <motion.text
            className={"text-xl md:text-3xl font-bold text-orange-500"}
          >
            This is a portal for administration
          </motion.text>
          <motion.button
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
              pressed: { scale: 0.9 },
            }}
            whileHover="hover"
            whileTap="pressed"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg text-lg"
          >
            <Link to={"/admin/dashboard"}>DashBoard</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
