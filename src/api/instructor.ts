import axios from "./axiosInterceptor";
import toast from "react-hot-toast";

type TEventData = { courseName: string; date: string };

export async function createEvent(data: TEventData) {
  try {
    let response = await axios.post(`/createEvent`, data);
    if (response.data.status === 200) {
      toast.success(response.data.message);
      return true
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
