import { motion } from "framer-motion";

function Box({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className="bg-pink-500 h-28 w-28 rounded-sm mt-4"
    >
      {text}
    </motion.div>
  );
}

export default function ScrollReveal() {
  const word = ["Html", "css", "js", "react", "Html", "css", "js", "react"];
  return (
    <div>
      {word.map((w, i) => (
        <Box key={i} text={w} />
      ))}
    </div>
  );
}
