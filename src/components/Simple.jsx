import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 border w-32 h-32 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,

        ease: "easeInOut",
      }}
      exit={{
        x: "-100vw",
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    />
  );
};

export default Simple;
