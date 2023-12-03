import CustomCard from "../shared/custom-card";

const ProfileBento = () => {
  return (
    <CustomCard className=" ">
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
    </CustomCard>
  );
};

export default ProfileBento;
