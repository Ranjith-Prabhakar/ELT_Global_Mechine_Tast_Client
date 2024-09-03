import Menu from "./Menu";
import Logo from "./Logo";
import ProfileData from "./ProfileData";
import data from "../../../assets/Profile/SideBar/data/student.js";
type Props = {};

const ProfileBoardSideBar = (props: Props) => {
  return (
    <div className="w-[220px] h-[1080px] bg-[#FFFFFF] border-r-[0.65px] border-opacity-10 pl-[20px] flex flex-col">
      <Logo />
      <ProfileData />
      <Menu data={data} />
    </div>
  );
};

export default ProfileBoardSideBar;
