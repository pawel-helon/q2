import { motion } from "framer-motion";

interface DivProps {
  children: React.ReactNode;
  duration: ".3" | ".6";
  className?: string;
}

export const Div = ({ children, duration, className }: DivProps) => {
  switch (duration) {
    case ".3":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, type: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      );
    case ".6":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      );
    default:
      throw Error("Invalid Div duration");
  }
};
