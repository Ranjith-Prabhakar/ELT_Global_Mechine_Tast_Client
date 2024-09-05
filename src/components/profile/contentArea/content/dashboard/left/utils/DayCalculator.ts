function calculateDaysTo(dateString: string): number {
  const eventDate: Date = new Date(dateString); // The target date
  const currentDate: Date = new Date(); // The current date

  // Calculate the time difference in milliseconds
  const timeDifference: number = eventDate.getTime() - currentDate.getTime();

  // Convert the time difference from milliseconds to days
  const daysDifference: number = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
  );

  return daysDifference;
}

export default calculateDaysTo