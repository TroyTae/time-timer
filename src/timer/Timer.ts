import "./Timer.scss";
import spaces from "one-spaces";
import { createElement } from "noliter";
import {
  getSeconds,
  isStarted,
  setSeconds,
  setStarted,
  subscribeStarted,
} from "~/TimeData";
import TimeText from "~/timer/TimeText";

const Reset = createElement("button", (el) => {
  el.className = spaces("btn", "reset");
  el.addEventListener("click", () => setSeconds(900));
});

const Trigger = createElement("button", (el) => {
  el.className = spaces("btn", "start");
  el.addEventListener(
    "click",
    (() => {
      let key: number | null = null;
      const stop = () => {
        setStarted(false);
        clearInterval(key);
      };
      return () => {
        if (isStarted()) {
          stop();
        } else {
          setStarted(true);
          key = window.setInterval(() => {
            const sec = getSeconds() - 1;
            setSeconds(sec);
            if (sec < 1) {
              stop();
            }
          }, 1000);
        }
      };
    })()
  );
});

subscribeStarted((started) => {
  Reset.disabled = started;
  Trigger.className = spaces("btn", started ? "pause" : "start");
});

export default createElement("section", (el) => {
  el.id = "timer";
  el.append(Reset, TimeText, Trigger);
});
