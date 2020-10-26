import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './Clock1.scss';
import RedCircle from './RedCircle';

export default $(TAG_NAME_SECTION)
  .sa(ATTR_ID, styles.clock)
  .add(
    $(TAG_NAME_DIV)
      .sa(ATTR_ID, styles.circle)
      .add(RedCircle),
    ...[...Array(12)].reduce((arr, v, i) => {
      const min = i * 5;
      arr.push(
        $(TAG_NAME_DIV)
          .sa(ATTR_CLASS, spaces(
            styles.dot,
            styles[`m${min}`],
          ))
      );
      arr.push(
        $(TAG_NAME_SPAN)
          .sa(ATTR_CLASS, spaces(
            styles.min,
            styles[`m${min}`],
          ))
          .add(`${min}`)
      );
      return arr;
    }, []),
  );
