import { setTimeText } from "./timer/TimeText";
import { draw } from "./clock/RedCircle";

let modified = false;
let started = false;
let degree = 270;
let seconds = 900;

export function isModified() {
  return modified;
}
export function setModified(isModified: boolean) {
  modified = isModified;
}

export function isStarted() {
  return started;
}
export function setStarted(isStarted: boolean) {
  started = isStarted;
}

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

export function syncView() {
  setTimeText(seconds);
  draw(degree);
}
