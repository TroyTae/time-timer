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
import TimeText from './TimeText';
import {
  getSeconds,
  isStarted,
  setSeconds,
  setStarted,
} from '../TimeData';

const Reset = $(BUTTON)
  .set(CLASS_NAME, spaces(styles.btn, styles.reset))
  .on(CLICK, () => setSeconds(900));

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
        Reset.set(DISABLED, true);
        Trigger.set(CLASS_NAME, spaces(styles.btn, styles.pause));
        key = window.setInterval(() => {
          const sec = getSeconds() - 1;
          setSeconds(sec);
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
