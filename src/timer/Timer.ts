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
import * as styles from "./Timer.scss";

const Reset = createElement("button", (el) => {
  el.className = spaces(styles.btn, styles.reset);
  el.addEventListener("click", () => setSeconds(900));
});

const Trigger = createElement("button", (el) => {
  el.className = spaces(styles.btn, styles.start);
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
  Trigger.className = spaces(styles.btn, started ? styles.start : styles.pause);
});

export default createElement("section", (el) => {
  el.id = styles.timer;
  el.append(Reset, TimeText, Trigger);
});
