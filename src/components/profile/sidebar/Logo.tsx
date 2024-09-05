import logoImage from "../../../assets/Profile/SideBar/images/logoImage.png";

const Logo = () => {
  return (
    <div className="w-[200px] h-[70px] p-r-[10px] flex items-center">
      <div className="w-[114.5px] h-[30.1px] p-y-[3.05px] flex gap-[9px]">
        <img src={logoImage} height={"24px"} width={"24px"} />
        <div className="w-full flex items-center">
          <h1 className="font-baloo font-[600px] text-[18.55px] leading-[20.57px]">
            Logo
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
