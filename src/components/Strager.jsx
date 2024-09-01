// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Strager() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="menu">
//       <motion.button
//         whileTap={{ scale: 0.97 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Menu
//         <div
//           className="arrow"
//           style={{
//             transformOrigin: "50% 55%",
//             transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//             transition: "transform 0.3s ease",
//           }}
//         >
//           <svg width="15" height="15" viewBox="0 0 20 20">
//             <path d="M0 7 L 20 7 L 10 16" />
//           </svg>
//         </div>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.ul
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             style={{ overflow: "hidden" }}
//           >
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//             <li>Item 4</li>
//             <li>Item 5</li>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav className="menu" ref={scope}>
      <div
        style={{
          position: "fixed",
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: "white",
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <li>Item 1 </li>
        <li>Item 2 </li>
        <li>Item 3 </li>
        <li>Item 4 </li>
        <li>Item 5 </li>
      </ul>{" "}
    </nav>
  );
}
