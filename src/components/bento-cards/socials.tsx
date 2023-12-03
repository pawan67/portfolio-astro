import { AtSign, GithubIcon, Linkedin, Twitter } from "lucide-react";
import CustomCard from "../shared/custom-card";

const SocialsBentoCard = () => {
  return (
    <CustomCard>
      <div className=" grid grid-cols-2  gap-3">
        <a
          href="https://x.com/pawan67_"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-background p-3 aspect-square flex items-center justify-center rounded-xl"
        >
          <Twitter size={32} />
        </a>
        <a
          href="mailto:pawantamada8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-background p-3 aspect-square flex items-center justify-center rounded-xl"
        >
          <AtSign size={32} />
        </a>
        <a
          href="https://linkedin.com/in/pawan67"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-background p-3 aspect-square flex items-center justify-center rounded-xl"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/pawan67"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-background p-3 aspect-square flex items-center justify-center rounded-xl"
        >
          <GithubIcon size={32} />
        </a>
      </div>
    </CustomCard>
  );
};

export default SocialsBentoCard;
