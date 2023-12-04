import { techStack } from "@/lib/data";
import CustomCard from "../shared/custom-card";

const TechBentoCard = () => {
  return (
    <CustomCard>
      <div className=" grid grid-cols-5 gap-3">
        {techStack.map((tech, index) => (
          <a
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            title={tech.description}
            className="bg-background hover:scale-110 transition-all p-3 aspect-square flex items-center justify-center rounded-xl"
          >
            <img src={tech.image} alt={tech.name} className="w-8" />
          </a>
        ))}
      </div>
    </CustomCard>
  );
};

export default TechBentoCard;
