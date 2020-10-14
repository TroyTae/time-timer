import spaces from 'one-spaces';
import {
  $,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SECTION,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './clock.scss';

export default function Clock() {
  const clock = $(TAG_NAME_SECTION)
    .attrs('id', styles.clock)
    .append($(TAG_NAME_DIV).attrs('id', styles.circle));
  [...Array(12)].forEach((v, i) => {
    const min = i * 5;
    clock.append(
      $(TAG_NAME_DIV)
        .attrs(ATTR_CLASS, spaces(
          styles.dot,
          styles[`m${min}`],
        )),
      $(TAG_NAME_SPAN)
        .attrs(ATTR_CLASS, spaces(
          styles.min,
          styles[`m${min}`],
        ))
        .append(min.toString()),
    );
  });
  return clock;
}
