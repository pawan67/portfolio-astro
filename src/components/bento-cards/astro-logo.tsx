import CustomCard from "../shared/custom-card";

const AstroLogoCard = () => {
  return (
    <a href="https://astro.build/" target="_blank" rel="noreferrer">
      <CustomCard className="relative aspect-square  flex items-center justify-center">
        <img
          className=" hidden dark:block w-10 md:w-16"
          src="/images/astro-icon-light-gradient.png"
          alt=""
        />
        <img
          className=" dark:hidden block w-10 md:w-16"
          src="/images/astro-icon-dark.png"
          alt=""
        />

        <div className="  absolute text-sm inset-x-3 text-center bottom-3 font-bold">
          Built with Astro 3.5
        </div>
      </CustomCard>
    </a>
  );
};

export default AstroLogoCard;
