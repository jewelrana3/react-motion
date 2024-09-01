import { motion } from "framer-motion";

const shape = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 1,
      type: "spring",
    },
  },
};

export default function Variants() {
  return (
    <motion.div
      variants={shape}
      initial="initial"
      animate="animate"
      transition="transition"
      className="bg-green-500 w-32 h-32 border border-rounded"
    ></motion.div>
  );
}
