import { useState, useEffect } from "react";

const currDate = new Date();

export function Timer() : string {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();
      const hour = dateObject.getHours();
      const minute = String(dateObject.getMinutes()).length === 1 ? "0" + dateObject.getMinutes() : dateObject.getMinutes();
      const second = String(dateObject.getSeconds()).length === 1 ? "0" + dateObject.getSeconds() : dateObject.getSeconds();
      const currentTime = hour + ":" + minute + ":" + second;
      setTime(currentTime);
    }, 1000);
  }, []);
  return time;
}

export function YOE() : string {
  const joinedDate = new Date("January 9, 2023 00:00:00");
  var timeDiff = currDate.getTime() - joinedDate.getTime();
  timeDiff /= 60 * 60 * 1000 * 24 * 365;
  return Math.abs(timeDiff).toFixed(1);
}

export function Status () : Status {
  if(currDate.getHours() >=7 && currDate.getHours() < 9) return { title : "Warming Up", color : "fa-person-running"};
  else if(currDate.getHours() >=9 && currDate.getHours() < 18 ) return { title : "Being Busy", color : "fa-laptop-code"};
  else if(currDate.getHours() >= 18 && currDate.getHours() < 22) return { title : "Chilling", color : "fa-ghost"};
  else return { title : "Dozing", color : "fa-bed"};
}
