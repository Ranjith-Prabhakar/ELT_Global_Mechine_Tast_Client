import { useDispatch, useSelector } from "react-redux";
import { loadUser, TUser } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const useLocalStorageForUser = () => {
  const state = useSelector((state: { user: TUser }) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  if (!state.user.name) {
    let user = localStorage.getItem("ELTUser");
    if (user) {
      user = JSON.parse(user);
      dispatch(loadUser({ payload: user }));
    } else {
      toast.error("please login to use this featrue");
      navigate("/");
    }
  }
};

export default useLocalStorageForUser;
