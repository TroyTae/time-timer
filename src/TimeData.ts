import { setTimeText } from "./timer/TimeText";
import { draw } from "./clock/RedCircle";
import { createObserver } from "noliter";

const [isModified, setModified] = createObserver(false);
const [isStarted, setStarted, subscribeStarted] = createObserver(false);
let degree = 270;
let seconds = 900;

export function getDegree() {
  return degree;
}
export function setDegree(deg: number) {
  setSeconds(Math.round((360 - deg) * 10));
}

export function getSeconds() {
  return seconds;
}
export function setSeconds(sec: number) {
  seconds = sec;
  degree = 360 - sec / 10;
}

export { isModified, setModified, isStarted, setStarted, subscribeStarted };
