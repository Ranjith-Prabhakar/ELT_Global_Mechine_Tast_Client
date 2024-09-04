import { TUser } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

const useGetUser = () => {
  let user = useSelector((state: { user: TUser }) => state.user);
  if (!user.name) {
    let localUser = localStorage.getItem("ELTUser");
    if (localUser) {
      user = JSON.parse(localUser);
    }
  }
  return user;
};

export default useGetUser;
