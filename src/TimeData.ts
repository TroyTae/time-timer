import {notifier} from 'noliter';

const [isModified, setModified] = notifier(false);
const [isStarted, setStarted] = notifier(false);
const [getSeconds, setSeconds, addSecondsListener] = notifier(0);

function getDegree() {
  return 360 - getSeconds() / 10;
}
function setDegree(deg: number) {
  setSeconds(Math.round((360 - deg) * 10));
}

export {
  isModified,
  setModified,
  isStarted,
  setStarted,
  getSeconds,
  setSeconds,
  addSecondsListener,
  getDegree,
  setDegree,
};
