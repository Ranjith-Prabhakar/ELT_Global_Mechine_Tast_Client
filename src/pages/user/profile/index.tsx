import Login from "../../../pages/auth/Login/Login";
import useGetUser from "../../../hooks/useGetUser";
import InstructorProfile from "./InstructorProfile";
import UserProfile from "./UserProfile";


const Profile = () => {
  let user = useGetUser();
  
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
