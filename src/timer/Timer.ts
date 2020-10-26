import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  EVENT_TYPE_CLICK,
  PROP_DISABLED,
  TAG_NAME_BUTTON,
  TAG_NAME_SECTION,
} from 'noliter';
import * as styles from './Timer.scss';
import TimeText, { setTimeText } from './TimeText';
import {
  getSeconds,
  isStarted,
  setSeconds,
  setStarted,
} from '../TimeData';

const Reset = $(TAG_NAME_BUTTON)
  .sa(ATTR_CLASS, spaces(styles.btn, styles.reset))
  .on(EVENT_TYPE_CLICK, () => {
    setSeconds(900);
    setTimeText();
  });

const Trigger = $(TAG_NAME_BUTTON)
  .sa(ATTR_CLASS, spaces(styles.btn, styles.start))
  .on(EVENT_TYPE_CLICK, (() => {
    let key: number | null = null;
    const stop = () => {
      setStarted(false);
      Reset.sp(PROP_DISABLED, false);
      Trigger.sa(ATTR_CLASS, spaces(styles.btn, styles.start));
      if (key) {
        clearInterval(key);
      }
    };
    return () => {
      if (isStarted()) {
        stop();
      } else {
        setStarted(true);
        Reset.sp(PROP_DISABLED, true);
        Trigger.sa(ATTR_CLASS, spaces(styles.btn, styles.pause));
        key = window.setInterval(() => {
          const sec = getSeconds();
          setSeconds(sec - 1);
          setTimeText();
          if (sec < 1) {
            stop();
            setSeconds(0);
            setTimeText();
          }
        }, 1000);
      }
    };
  })());

export default $(TAG_NAME_SECTION)
  .sa(ATTR_ID, styles.timer)
  .add(
    Reset,
    TimeText,
    Trigger,
  );
