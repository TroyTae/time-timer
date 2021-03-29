import spaces from "one-spaces";
import {
  createElement,
  APPEND,
  ADD_EVENT_LISTENER,
  CLICK,
  BUTTON,
  SECTION,
  CLASS_NAME,
  DISABLED,
  ID,
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
  el[CLASS_NAME] = spaces(styles.btn, styles.reset);
  el[ADD_EVENT_LISTENER](CLICK, () => {
    setSeconds(900);
    syncView();
  });
});

const Trigger = createElement(BUTTON, (el) => {
  el[CLASS_NAME] = spaces(styles.btn, styles.start);
  el[ADD_EVENT_LISTENER](
    CLICK,
    (() => {
      let key: number | null = null;
      const stop = () => {
        setStarted(false);
        Reset[DISABLED] = false;
        Trigger[CLASS_NAME] = spaces(styles.btn, styles.start);
        clearInterval(key);
      };
      return () => {
        if (isStarted()) {
          stop();
        } else {
          setStarted(true);
          Reset[DISABLED] = true;
          Trigger[CLASS_NAME] = spaces(styles.btn, styles.pause);
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
  el[ID] = styles.timer;
  el[APPEND](Reset, TimeText, Trigger);
});
