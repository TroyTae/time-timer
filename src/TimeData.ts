import { createObserver } from "noliter";

const [isModified, setModified] = createObserver(false);
const [isStarted, setStarted, subscribeStarted] = createObserver(false);
const [getSeconds, setSeconds] = createObserver(900);
const getDegree = () => 360 - getSeconds() / 10;
const setDegree = (deg: number) => setSeconds(Math.round((360 - deg) * 10));

export {
  isModified,
  setModified,
  isStarted,
  setStarted,
  subscribeStarted,
  getSeconds,
  setSeconds,
  getDegree,
  setDegree,
};
