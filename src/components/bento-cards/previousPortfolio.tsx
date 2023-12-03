import { ExternalLink } from "lucide-react";
import CustomCard from "../shared/custom-card";

const PreviousPortfoliioCard = () => {
  return (
    <CustomCard className=" relative aspect-square flex justify-center items-center">
      <div className=" ">
        <a
          href="https://v1.pawan67.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex
         items-center  justify-center bg-background p-5 rounded-2xl"
        >
          <ExternalLink size={34} />
        </a>
        <div className=" absolute text-sm inset-x-3 text-center bottom-3 font-bold">
          Previous Site
        </div>
      </div>
    </CustomCard>
  );
};

export default PreviousPortfoliioCard;
