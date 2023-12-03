import { ExternalLink, Github } from "lucide-react";
import CustomCard from "../shared/custom-card";

const ProjectBentoCard = ({
  title,
  description,
  githubLink,
  liveLink,
}: {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}) => {
  return (
    <CustomCard className="  relative">
      <div className=" ">
        <h1 className=" moranga-bold mb-3 text-xl">{title} </h1>
        <p className=" mb-10">{description}</p>

        <div className=" absolute bottom-5  flex items-center space-x-3 mt-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
          </a>
        </div>
      </div>
    </CustomCard>
  );
};

export default ProjectBentoCard;
