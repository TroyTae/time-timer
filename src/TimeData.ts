import { createObserver } from "noliter";

const [isModified, setModified] = createObserver(false);
const [isStarted, setStarted, subscribeStarted] = createObserver(false);
const [getSeconds, setSeconds, subscribeSeconds] = createObserver(900);

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
