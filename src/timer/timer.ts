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
import * as styles from './timer.scss';
import {getTimeText, setTimeText} from './TimeText';
import {getSeconds, setDegree, setSeconds, setStarting} from '../TimeData';

export default $(TAG_NAME_SECTION)
  .sa(ATTR_ID, styles.timer)
  .add(
    $(TAG_NAME_BUTTON)
      .sa(ATTR_CLASS, spaces(styles.btn, styles.reset))
      .on(EVENT_TYPE_CLICK, () => {
        setSeconds(900);
        setTimeText();
      }),
    $(TAG_NAME_BUTTON)
      .sa(ATTR_CLASS, spaces(styles.btn, styles.start))
      .on(EVENT_TYPE_CLICK, (() => {
        let key: number | null = null;
        const stop = () => {
          setStarting(false);
          reset.sp(PROP_DISABLED, false);
          start.sa(ATTR_CLASS, spaces(styles.btn, styles.start));
          if (key) {
            clearInterval(key);
          }
        };
        return () => {
          if (isStarting) {
            stop();
          } else {
            isStarting = true;
            reset.sp(PROP_DISABLED, true);
            start.sa(ATTR_CLASS, spaces(styles.btn, styles.pause));
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
      })()),
  );
