const NavBar = () => {
  return (
    <div className=" mb-10">
      <div className="  flex items-center space-x-3  bg-background p-2 rounded-full  border     ">
        <div className="  px-4 p-2 rounded-full">Home</div>
        <div className=" bg-primary-foreground px-4 p-2 rounded-full">
          Projects
        </div>
      </div>
    </div>
  );
};

export default NavBar;
