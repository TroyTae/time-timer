import { createObserver } from "noliter";

const [isModified, setModified] = createObserver(false);
const [isStarted, setStarted, subscribeStarted] = createObserver(false);
const [getSeconds, setSeconds, subscribeSeconds] = createObserver(0);

export {
  isModified,
  setModified,
  isStarted,
  setStarted,
  subscribeStarted,
  getSeconds,
  setSeconds,
  subscribeSeconds,
};
