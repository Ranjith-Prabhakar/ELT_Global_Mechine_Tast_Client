import { format, isToday, isPast } from "date-fns";

export const formatEventDate = function (eventDate: string) {
  const date = new Date(eventDate);

  if (isToday(date)) {
    return `Today ${format(date, "p")}`; // "Today 6:00 PM"
  } else if (isPast(date)) {
    return "Live";
  } else {
    return `${format(date, "do MMMM p")}`; // "21st June 10:00 AM"
  }
};
