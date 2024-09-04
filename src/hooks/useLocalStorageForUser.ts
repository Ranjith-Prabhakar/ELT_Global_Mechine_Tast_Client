import { useDispatch } from "react-redux";
import { loadUser } from "../redux/features/user/userSlice";
const useLocalStorageForUser = () => {
  let dispatch = useDispatch();
  let user = localStorage.getItem("ELTUser");
  if (user) user = JSON.parse(user);
  dispatch(loadUser({ payload: user }));
};

export default useLocalStorageForUser;
