import axios from "./axiosInterceptor";
import toast from "react-hot-toast";

type TEvents = {
  rowCount?: string;
  pageCount?: string;
  total?: string;
};

export const fetchEvents = async function ({
  rowCount = "10",
  pageCount = "1",
  total = "0",
}: TEvents) {
  try {
    let response = await axios.post("/fetchEvents", {
      rowCount,
      pageCount,
      total,
    });
    console.log("response", response);
    return response.data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
