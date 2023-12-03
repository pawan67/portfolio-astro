import CustomCard from "../shared/custom-card";
import { Button } from "../ui/button";

const MediaBentoCard = ({ title, imgUrl }) => {
  return (
    <CustomCard
      // @ts-ignore
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative min-h-[150px]"
    >
      <p className=" absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t text-white from-black to-transparent  font-black text-sm  rounded-b-2xl">
        {title}
      </p>
    </CustomCard>
  );
};

export default MediaBentoCard;
