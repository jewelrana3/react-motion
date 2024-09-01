import React from "react";
import { motion } from "framer-motion";

export default function Text() {
  const text = " We Are Enjoing Reactive Acceslator Course .LWS is Osame!!!";
  const wordArry = text.split(" ");
  return (
    // <div className="text-2xl m-4 text-center">
    //   {wordArry.map((word, index) => (
    //     <motion.span
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{
    //         duration: 1,
    //         delay: index / 10,
    //       }}
    //       key={index}
    //     >
    //       {word}
    //     </motion.span>
    //   ))}
    // </div>
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
}
