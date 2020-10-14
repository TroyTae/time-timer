import spaces from 'one-spaces';
import {
  $,
  ATTR_ID,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './clock.scss';

export default function Clock() {
  return $(TAG_NAME_SECTION)
    .attrs(ATTR_ID, styles.clock)
    .append(
      $(TAG_NAME_DIV)
        .attrs(ATTR_ID, styles.circle),
      ...[...Array(12)].map((v, i) => (
        $(TAG_NAME_DIV)
          .attrs(ATTR_CLASS, spaces(
            styles.dot,
            styles[`m${i * 5}`],
          ))
      )),
      ...[...Array(12)].map((v, i) => (
        $(TAG_NAME_SPAN)
          .attrs(ATTR_CLASS, spaces(
            styles.min,
            styles[`m${i * 5}`],
          ))
          .append(`${i * 5}`)
      )),
    );
}
