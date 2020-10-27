import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_SPAN,
  EVENT_TYPE_CLICK,
} from 'noliter';
import * as styles from './Clock.scss';
import RedCircle, { draw } from './RedCircle';
import { setSeconds } from '/TimeData';
import { syncTimeText } from '/timer/TimeText';

export default $(TAG_NAME_SECTION)
  .sa(ATTR_ID, styles.clock)
  .add(
    $(TAG_NAME_DIV)
      .sa(ATTR_ID, styles.circle)
      .add(RedCircle),
    ...[...Array(12)].map((v, i) => {
      const min = i * 5;
      return $(TAG_NAME_DIV)
        .sa(ATTR_CLASS, spaces(
          styles.label,
          styles[`m${min}`],
        ))
        .on(EVENT_TYPE_CLICK, () => {
          setSeconds(min * 60);
          syncTimeText();
          draw();
        })
        .add(
          $(TAG_NAME_DIV)
            .sa(ATTR_CLASS, styles.dot),
          $(TAG_NAME_SPAN)
            .sa(ATTR_CLASS, styles.min)
            .add(`${min}`),
        );
    }),
  );
