import CustomCard from "../shared/custom-card";
import ThemeToggle from "../theme-toggle";

const ProfileBento = () => {
  return (
    <CustomCard className=" relative ">
      <div>
        <img className=" w-24 rounded-full" src="/images/profile.jpg" alt="" />
      </div>
      <p className="mt-4 text-muted-foreground">
        <span className="moranga-bold text-primary text-xl">Hello,</span> this
        is{" "}
        <span className="moranga-bold text-primary text-xl">Pawan tamada.</span>{" "}
        <br /> a full stack developer. I'm an experienced full stack developer
        with proficiency in React, Next.js, Node.js, Express.js, MongoDB, SQL
        and Tyepescript.🧑‍💻
      </p>
      <div className=" absolute top-5 right-5">
        <ThemeToggle />
      </div>
    </CustomCard>
  );
};

export default ProfileBento;
