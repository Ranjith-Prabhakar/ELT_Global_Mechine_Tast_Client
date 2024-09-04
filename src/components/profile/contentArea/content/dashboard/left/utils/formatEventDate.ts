import { format, isToday, isPast } from "date-fns";

export const formatEventDate = function (eventDate: string) {
  const date = new Date(eventDate);

  if (isToday(date)) {
    return `Today ${format(date, "p")}`; // "Today 6:00 PM"
  } else if (isPast(date)) {
    return "Live";
  } else {
    const formattedDate = format(date, "do MMMM p"); // "21st June 10:00 AM"
    const parts = formattedDate.split(" ");
    const month = parts[1].substring(0, 4); // Get the first 4 letters of the month
    parts[1] = month;
    return parts.join(" "); // "21st June 10:00 AM"
  }
};
