import {notifier} from 'noliter';

const [isModified, setModified] = notifier(false);
const [isStarted, setStarted] = notifier(false);
const [getSeconds, setSeconds] = notifier(900);
const [getResetTime, setResetTime] = notifier(getSeconds());

function getDegree() {
  return 360 - getSeconds() / 10;
}
function setDegree(deg: number) {
  setSeconds(Math.round((360 - deg) * 10));
}

function reset() {
  setSeconds(getResetTime());
}

export {
  isModified,
  setModified,
  isStarted,
  setStarted,
  getSeconds,
  setSeconds,
  reset,
  setResetTime,
  getDegree,
  setDegree,
};
