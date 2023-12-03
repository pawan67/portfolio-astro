import { techStack } from "@/lib/data";
import CustomCard from "../shared/custom-card";

const TechBentoCard = () => {
  return (
    <CustomCard>
      <div className=" grid grid-cols-5 gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-background p-3 aspect-square flex items-center justify-center rounded-xl"
          >
            <img src={tech.image} alt={tech.name} className="w-8" />
          </div>
        ))}
      </div>
    </CustomCard>
  );
};

export default TechBentoCard;
