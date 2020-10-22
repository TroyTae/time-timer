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
    .attrs(ATTR_CLASS, spaces(styles.btn, styles.reset))
    .on(EVENT_TYPE_CLICK, () => {
      setSeconds(900);
      setTimeText();
    });

  const start = $(TAG_NAME_BUTTON)
    .attrs(ATTR_CLASS, spaces(styles.btn, styles.start))
    .on(EVENT_TYPE_CLICK, (() => {
      let key: number | null = null;
      const stop = () => {
        isStarting = false;
        reset.props(PROP_DISABLED, false);
        start.attrs(ATTR_CLASS, spaces(styles.btn, styles.start));
        if (key) {
          clearInterval(key);
        }
      };
      return () => {
        if (isStarting) {
          stop();
        } else {
          isStarting = true;
          reset.props(PROP_DISABLED, true);
          start.attrs(ATTR_CLASS, spaces(styles.btn, styles.pause));
          key = window.setInterval(() => {
            const sec = getSeconds();
            setSeconds(sec - 1);
            setTimeText();
            if (sec < 1) {
              stop();
              setSeconds(0);
              setTimeText();
            }
            // updateFavicon();
          }, 1000);
        }
      };
    })());

  control.append(
    reset.dom,
    getTimeText(),
    start.dom,
  );
}
