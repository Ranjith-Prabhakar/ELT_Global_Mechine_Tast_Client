import Login from "../../../pages/auth/Login/Login";
import useGetUser from "../../../hooks/useGetUser";
import InstructorProfile from "./InstructorProfile";
import UserProfile from "./UserProfile";

type Props = {};

const Profile = (props: Props) => {
  let user = useGetUser();
  console.log("userrrrrr", user);
  return (
    <>
      {user.selectedRole === "user" ? (
        <UserProfile />
      ) : user.selectedRole === "instructor" ? (
        <InstructorProfile />
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;
