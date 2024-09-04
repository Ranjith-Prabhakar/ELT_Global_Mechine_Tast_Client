import ContentArea from "@/components/profile/contentArea";
import ProfileBoardSideBar from "@/components/profile/sidebar";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <div className="bg-ETLBackground max-h-auto max-w-[100vw] flex">
      <ProfileBoardSideBar />
      <ContentArea />
    </div>
  );
};

export default UserProfile;
