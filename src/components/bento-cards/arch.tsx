import CustomCard from "../shared/custom-card";
import { Button } from "../ui/button";
import { useState } from "react";
import { RefreshCcw } from "lucide-react";

const MediaBentoCard = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleReloadClick = () => {
    // Update the random number to trigger a re-render with a new background image
    setRandomNumber(generateRandomNumber());
  };

  function generateRandomNumber(): number {
    // Generate a random number between 1 and 8
    return Math.floor(Math.random() * 8) + 1;
  }

  return (
    <CustomCard
      style={{
        backgroundImage: `url(/images/screenshots/${randomNumber}.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-[150px]"
    >
      <Button size="icon" className="rounded-full absolute bottom-3 right-3 z-[100]" onClick={handleReloadClick}>
        <RefreshCcw size={18} />
      </Button>
      <p className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t text-white from-black to-transparent font-black text-sm rounded-b-2xl">
        I use Arch btw
      </p>
    </CustomCard>
  );
};

export default MediaBentoCard;
