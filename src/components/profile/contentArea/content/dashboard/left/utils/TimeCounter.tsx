import { useState, useEffect } from 'react';

// Function to calculate remaining time in hours, minutes, and seconds
function calculateRemainingTime(targetTime: string) {
  const currentDate: Date = new Date();
  const [hours, minutes] = targetTime.split(':').map(Number);

  const targetDate: Date = new Date();
  targetDate.setHours(hours, minutes, 0, 0); // Set target time

  const timeDifference: number = targetDate.getTime() - currentDate.getTime();

  if (timeDifference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 }; // If the time has passed
  }

  const remainingHours: number = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes: number = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds: number = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds };
}

// React component using the timer
export default function TimerComponent({ targetTime }: { targetTime: string }) {
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime(targetTime));

  useEffect(() => {
    const timerId = setInterval(() => {
      const remainingTime = calculateRemainingTime(targetTime);
      setTimeLeft(remainingTime);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, [targetTime]);

  return (
    <div>
      {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
        <div>
          Time left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      ) : (
        <div>Time is up!</div>
      )}
    </div>
  );
}
