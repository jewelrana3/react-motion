import { motion } from "framer-motion";

export default function TransitionType() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Learing Animatiom</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          rerum magni incidunt doloremque eligendi inventore voluptatibus
          perspiciatis at aliquam veritatis?
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <h1>Learing Animatiom</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          rerum magni incidunt doloremque eligendi inventore voluptatibus
          perspiciatis at aliquam veritatis?
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.7, duration: 2 }}
      >
        <h1>Learing Animatiom</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          rerum magni incidunt doloremque eligendi inventore voluptatibus
          perspiciatis at aliquam veritatis?
        </p>
      </motion.div>
    </>
  );
}
