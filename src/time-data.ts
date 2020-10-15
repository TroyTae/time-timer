let seconds = 900;
let degree = 270;

export function getSeconds() {
  return seconds;
}

export function getDegree() {
  return degree;
}

export function setSeconds(sec: number) {
  seconds = sec;
  degree = 360 - sec / 10;
}

export function setDegree(deg: number) {
  degree = deg;
  seconds = (360 - deg) * 10;
}
