import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate } from "react-router-dom";
type TSingin = {
  name: string;
  email: string;
  password: string;
};
export async function signUp({ name, email, password }: TSingin) {
  try {
    let result = await axios.post(`${BASE_URL}/signup`, {
      name,
      email,
      password,
    });
    if (result.data.status === 201) {
      return true;
    }
    console.log("result", result.data);
  } catch (error: any) {
    if (error.response.data.status === 400) {
      toast.error(error.response.data.message);
    }
  }
}
