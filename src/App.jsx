import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <motion.div
        className="flame-bg"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      <motion.div
        className="logo-block"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src="/logo.png"
          alt="Karma Kartel"
          className="logo"
        />
        <motion.h2
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.6 }}
        >
          The Truth Lives Here
        </motion.h2>
      </motion.div>

      <motion.div
        className="embers"
        animate={{ backgroundPosition: ["0% 100%", "100% 0%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </div>
  );
}
