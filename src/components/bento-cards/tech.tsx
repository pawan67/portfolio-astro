import { techStack } from "@/lib/data";
import CustomCard from "../shared/custom-card";
import { motion } from "framer-motion";
const TechBentoCard = () => {
  return (
    <CustomCard>
      <div className=" grid grid-cols-5 gap-3">
        {techStack.map((tech, index) => (
          <motion.a
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            title={tech.description}
            className="bg-background hover:scale-110  p-3 aspect-square flex items-center justify-center rounded-xl"
          >
            <img src={tech.image} alt={tech.name} className="w-8" />
          </motion.a>
        ))}
      </div>
    </CustomCard>
  );
};

export default TechBentoCard;
