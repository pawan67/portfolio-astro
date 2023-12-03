import { ExternalLink } from "lucide-react";
import CustomCard from "../shared/custom-card";

const ResumeCard = ({ title, link }) => {
  return (
    <CustomCard className=" relative aspect-square flex justify-center items-center">
      <div className=" ">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex
         items-center justify-center bg-background p-5 rounded-2xl"
        >
          <ExternalLink size={34} />
        </a>
        <div className=" absolute text-sm inset-x-3 text-center bottom-3 font-bold">
          {title}
        </div>
      </div>
    </CustomCard>
  );
};

export default ResumeCard;
