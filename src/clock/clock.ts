import spaces from 'one-spaces';
import {
  $,
  ATTR_CLASS,
  TAG_NAME_DIV,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './clock.scss';

const clock = document.getElementById('clock');

if (clock) {
  [...Array(12)].forEach((v, i) => {
    const min = i * 5;
    clock.appendChild(
      $(TAG_NAME_DIV)
        .attrs(ATTR_CLASS, spaces(
          styles.dot,
          styles[`m${min}`],
        ))
        .dom
    );
    clock.appendChild(
      $(TAG_NAME_SPAN)
        .attrs(ATTR_CLASS, spaces(
          styles.min,
          styles[`m${min}`],
        ))
        .append(min.toString())
        .dom
    );
  });
}
