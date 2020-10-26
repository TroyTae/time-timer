let modified = false;
let started = false;
let seconds = 900;
let degree = 270;


export function isModified() { return modified; }
export function setModified(isModified: boolean) {
  modified = isModified;
}

export function isStarted() { return started; }
export function setStarted(isStarted: boolean) {
  started = isStarted;
}

export function getSeconds() { return seconds; }
export function setSeconds(sec: number) {
  seconds = sec;
  degree = 360 - sec / 10;
}

export function getDegree() { return degree; }
export function setDegree(deg: number) {
  setSeconds(Math.round((360 - deg) * 10));
}
