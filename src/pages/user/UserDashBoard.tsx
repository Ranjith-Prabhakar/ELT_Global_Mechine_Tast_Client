import ProfileBoardSideBar from "@/components/general_components/profile";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-ETLBackground min-h-[100vh] min-w-[100vw]">
      <ProfileBoardSideBar />
    </div>
  );
};

export default Profile;
