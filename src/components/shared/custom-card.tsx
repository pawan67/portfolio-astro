import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const CustomCard = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,

        y: 20,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: 0.2,
        duration: 0.4,
        jitter: 0.5,
        ease: "easeInOut",
      }}
      {...props}
      className={cn(" bg-secondary   h-full p-5 rounded-3xl  ", className)}
    >
      {children}
    </motion.div>
  );
};

export default CustomCard;
