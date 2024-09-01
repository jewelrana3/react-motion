import { motion } from "framer-motion";

const KeyFrames = () => {
  return (
    <motion.div
      className="bg-green-500 w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        scale: [1, 1, 1, 2, 1],
        rotate: [0, 90, 180, 0, 1],
      }}
      transition={{ duration: 1.7 }}
    />
  );
};

export default KeyFrames;
