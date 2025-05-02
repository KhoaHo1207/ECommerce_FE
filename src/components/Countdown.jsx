import React, { memo, useEffect, useState } from "react";

const Item = (title, time) => {
  return (
    <div className="flex size-16 flex-col items-center justify-center rounded-md bg-neutral-200">
      <span className="font-semibold">{time}</span>
      <span className="text-xs text-gray-500">{title}</span>
    </div>
  );
};
const Countdown = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      return { hours: "00", minutes: "00", seconds: "00" };
    }

    const hours = String(
      Math.floor((distance / (1000 * 60 * 60)) % 24),
    ).padStart(2, "0");
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(
      2,
      "0",
    );
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex w-full items-center justify-center gap-2 py-6">
      {Item("Hours", timeLeft.hours)}
      {Item("Minutes", timeLeft.minutes)}
      {Item("Seconds", timeLeft.seconds)}
    </div>
  );
};

export default memo(Countdown);
