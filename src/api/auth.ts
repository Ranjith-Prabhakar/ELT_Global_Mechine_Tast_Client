import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BASE_URL;

type TSingin = {
  name?: string;
  email: string;
  password: string;
  selectedRole?: string;
};

export async function signUp({ name, email, password, selectedRole }: TSingin) {
  try {
    let result = await axios.post(`${BASE_URL}/signup`, {
      name,
      email,
      password,
      selectedRole,
    });
    if (result.data.status === 201) {
      return true;
    }
  } catch (error: any) {
    if (error.response.data.status === 400) {
      toast.error(error.response.data.message);
    }
  }
}

export async function login({ email, password }: TSingin) {
  try {
    let result = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    console.log("result******************", result.data.user);
    console.log("result dataaaa******************", result.data);
    if (result.data.status === 200) {
      localStorage.setItem("ELTToken",result.data.token);
      localStorage.setItem("ELTUser", JSON.stringify(result.data.user));
      return result.data.user;
    }
  } catch (error: any) {
    if (error.response.data.status === 400) {
      toast.error(error.response.data.message);
    }
  }
}
