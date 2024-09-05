import axios from "./axiosInterceptor";

type TEvents = {
  rowCount?: number;
  pageCount?: number;
  total?: number;
  bookedOnlyEvents?: number;
};

export const fetchEvents = async function ({
  rowCount = 10,
  pageCount = 1,
  total = 0,
  bookedOnlyEvents = 0,
}: TEvents) {
  try {
    let response = await axios.post("/fetchEvents", {
      rowCount,
      pageCount,
      total,
      bookedOnlyEvents,
    });
    return response.data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addBookedEvents = async function (eventId: string) {
  try {
    let response = await axios.post("/addBookedEvents", { eventId });
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};
