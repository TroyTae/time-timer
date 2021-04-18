import { createObserver } from "noliter";

const [isModified, setModified] = createObserver(false);
const [isStarted, setStarted, subscribeStarted] = createObserver(false);
const [getSeconds, setSeconds, subscribeSeconds] = createObserver(0);
const getDegree = () => 360 - getSeconds() / 10;
const setDegree = (deg: number) => setSeconds(Math.round((360 - deg) * 10));
const subscribeDegree = (callback: (value?: number) => void) =>
  subscribeSeconds(() => callback(getDegree()));

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
  subscribeSeconds,
  subscribeDegree,
};
