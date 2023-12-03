import CustomCard from "../shared/custom-card";

const AstroLogoCard = () => {
  return (
    <CustomCard className="relative aspect-square  flex items-center justify-center">
      <img
        className=" w-10 md:w-16"
        src="/images/astro-icon-light-gradient.png"
        alt=""
      />

      <div className="  absolute text-sm inset-x-3 text-center bottom-3 font-bold">
        Built with Astro 3.5
      </div>
    </CustomCard>
  );
};

export default AstroLogoCard;
