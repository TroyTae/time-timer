import spaces from "one-spaces";
import {
  append,
  createElement,
  addEventListener,
  CLICK,
  BUTTON,
  SECTION,
} from "noliter";
import {
  getSeconds,
  isStarted,
  setSeconds,
  setStarted,
  syncView,
} from "~/TimeData";
import TimeText from "~/timer/TimeText";
import * as styles from "./Timer.scss";

const Reset = createElement(BUTTON, (el) => {
  el.className = spaces(styles.btn, styles.reset);
  addEventListener(el, CLICK, () => {
    setSeconds(900);
    syncView();
  });
});

const Trigger = createElement(BUTTON, (el) => {
  el.className = spaces(styles.btn, styles.start);
  addEventListener(
    el,
    CLICK,
    (() => {
      let key: number | null = null;
      const stop = () => {
        setStarted(false);
        Reset.disabled = false;
        Trigger.className = spaces(styles.btn, styles.start);
        clearInterval(key);
      };
      return () => {
        if (isStarted()) {
          stop();
        } else {
          setStarted(true);
          Reset.disabled = true;
          Trigger.className = spaces(styles.btn, styles.pause);
          key = window.setInterval(() => {
            const sec = getSeconds() - 1;
            setSeconds(sec);
            if (sec < 1) {
              stop();
            }
            syncView();
          }, 1000);
        }
      };
    })()
  );
});

export default createElement(SECTION, (el) => {
  el.id = styles.timer;
  append(el, Reset, TimeText, Trigger);
});
