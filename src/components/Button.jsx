import { motion } from "framer-motion";

export default function Button() {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 border"
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 2, transition: { yoyo: Infinity } }}
        exit={{
          x: "-100vw",
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        Tap me
      </motion.button>
    </div>
  );
}
