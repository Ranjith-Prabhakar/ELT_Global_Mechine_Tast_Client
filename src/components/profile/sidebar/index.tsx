import Menu from "./Menu.js";
import Logo from "./Logo.js";
import ProfileData from "./ProfileData.js";
import data from "../../../assets/Profile/SideBar/data/student";

const ProfileBoardSideBar = () => {
  return (
    <div className="w-[220px] h-[1080px] bg-[#FFFFFF] border-r-[0.65px] border-opacity-10 pl-[20px] hidden 400px:flex flex-col">
      <Logo />
      <ProfileData />
      <Menu data={data} />
    </div>
  );
};

export default ProfileBoardSideBar;
