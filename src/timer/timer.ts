import * as styles from './timer.scss';
import spaces from 'one-spaces';
import {
  $,
  ATTR_CLASS,
  EVENT_TYPE_CLICK,
  PROP_DISABLED,
  TAG_NAME_BUTTON,
} from 'noliter';
import {getTimeText, setTimeText} from './display';
import {getSeconds, setDegree, setSeconds} from '../time-data';


const control = document.getElementById('timer');

if (control) {
  let isStarting = false;

  const reset = $(TAG_NAME_BUTTON)
    .sa(ATTR_CLASS, spaces(styles.btn, styles.reset))
    .on(EVENT_TYPE_CLICK, () => {
      setSeconds(900);
      setTimeText();
    });

  const start = $(TAG_NAME_BUTTON)
    .sa(ATTR_CLASS, spaces(styles.btn, styles.start))
    .on(EVENT_TYPE_CLICK, (() => {
      let key: number | null = null;
      const stop = () => {
        isStarting = false;
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
    })());

  control.add(
    reset.dom,
    getTimeText(),
    start.dom,
  );
}
