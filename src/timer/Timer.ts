import spaces from 'one-spaces';
import {
  $,
  ID,
  CLASS_NAME,
  CLICK,
  DISABLED,
  BUTTON,
  SECTION,
} from 'noliter';
import * as styles from './Timer.scss';
import { draw } from '/clock/RedCircle';
import TimeText, { syncTimeText } from './TimeText';
import {
  getSeconds,
  isStarted,
  reset,
  setResetTime,
  setSeconds,
  setStarted,
} from '../TimeData';

const Reset = $(BUTTON)
  .set(CLASS_NAME, spaces(styles.btn, styles.reset))
  .on(CLICK, () => {
    reset();
    syncTimeText();
    draw();
  });

const Trigger = $(BUTTON)
  .set(CLASS_NAME, spaces(styles.btn, styles.start))
  .on(CLICK, (() => {
    let key: number | null = null;
    const stop = () => {
      setStarted(false);
      Reset.set(DISABLED, false);
      Trigger.set(CLASS_NAME, spaces(styles.btn, styles.start));
      clearInterval(key);
    };
    return () => {
      if (isStarted()) {
        stop();
      } else {
        setStarted(true);
        setResetTime(getSeconds());
        Reset.set(DISABLED, true);
        Trigger.set(CLASS_NAME, spaces(styles.btn, styles.pause));
        key = window.setInterval(() => {
          const sec = getSeconds() - 1;
          setSeconds(sec);
          syncTimeText();
          draw();
          if (sec < 1) {
            stop();
          }
        }, 1000);
      }
    };
  })());

export default $(SECTION)
  .set(ID, styles.timer)
  .add(
    Reset,
    TimeText,
    Trigger,
  );
