let isDrawing = false;
let isStarting = false;
let seconds = 900;
let degree = 270;


export function getDrawing() { return isDrawing; }
export function setDrawing(isDraw: boolean) {
  isDrawing = isDraw;
}

export function getStarting() { return isStarting; }
export function setStarting(isStart: boolean) {
  isStarting = isStart;
}

export function getSeconds() { return seconds; }
export function setSeconds(sec: number) {
  seconds = sec;
  degree = 360 - sec / 10;
}

export function getDegree() { return degree; }
export function setDegree(deg: number) {
  degree = deg;
  seconds = (360 - deg) * 10;
}
