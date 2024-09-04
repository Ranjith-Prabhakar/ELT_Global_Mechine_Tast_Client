import ContentArea from "@/components/profile/contentArea";
import ProfileBoardSideBar from "@/components/profile/sidebar";
import { TUser } from "../../../redux/features/user/userSlice";
import { useSelector } from "react-redux";

type Props = {};

const Profile = (props: Props) => {
  let user = useSelector((state: { user: TUser }) => state.user);
  console.log("userrrrrr", user);
  return (
    <div className="bg-ETLBackground max-h-auto max-w-[100vw] flex">
      <ProfileBoardSideBar />
      <ContentArea />
    </div>
  );
};

export default Profile;
