import { TUser } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

const useGetUser = () => {
  let user = useSelector((state: { user: TUser }) => state.user);
  return user;
};

export default useGetUser;
