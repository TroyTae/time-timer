import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './Clock.scss';
import RedCircle from './RedCircle';

export default $(TAG_NAME_SECTION)
  .attrs(ATTR_ID, styles.clock)
  .append(
    $(TAG_NAME_DIV)
      .attrs(ATTR_ID, styles.circle)
      .append(RedCircle),
    ...[...Array(12)].reduce((arr, v, i) => {
      const min = i * 5;
      arr.push(
        $(TAG_NAME_DIV)
          .attrs(ATTR_CLASS, spaces(
            styles.dot,
            styles[`m${min}`],
          ))
      );
      arr.push(
        $(TAG_NAME_SPAN)
          .attrs(ATTR_CLASS, spaces(
            styles.min,
            styles[`m${min}`],
          ))
          .append(`${min}`)
      );
      return arr;
    }, []),
  );
