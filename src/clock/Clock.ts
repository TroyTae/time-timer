import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_BUTTON,
  EVENT_TYPE_CLICK,
} from 'noliter';
import * as styles from './Clock.scss';
import RedCircle, { draw } from './RedCircle';
import { isStarted, setSeconds } from '/TimeData';
import { syncTimeText } from '/timer/TimeText';

export default $(TAG_NAME_SECTION)
  .sa(ATTR_ID, styles.clock)
  .add(
    $(TAG_NAME_DIV)
      .sa(ATTR_ID, styles.circle)
      .add(RedCircle),
    ...[...Array(12)]
      .map((v, i) => i * 5)
      .map((min) => (
        $(TAG_NAME_BUTTON)
          .add(`${min}`)
          .sa(ATTR_CLASS, spaces(
            styles.min,
            styles[`m${min}`],
          ))
          .on(EVENT_TYPE_CLICK, () => {
            if (!isStarted()) {
              setSeconds(min * 60);
              syncTimeText();
              draw();
            }
          })
      )),
  );
