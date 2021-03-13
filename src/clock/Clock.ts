import spaces from 'one-spaces';
import {
  $,
  ID,
  CLASS_NAME,
  DIV,
  SECTION,
  BUTTON,
  CLICK,
} from 'noliter';
import * as styles from './Clock.scss';
import RedCircle, { draw } from './RedCircle';
import { isStarted, setSeconds } from '/TimeData';

export default $(SECTION)
  .set(ID, styles.clock)
  .add(
    $(DIV)
      .set(ID, styles.circle)
      .add(RedCircle),
    ...[...Array(12)]
      .map((v, i) => i * 5)
      .map((min) => (
        $(BUTTON)
          .add(`${min}`)
          .set(CLASS_NAME, spaces(
            styles.min,
            styles[`m${min}`],
          ))
          .on(CLICK, () => {
            if (!isStarted()) {
              setSeconds(min * 60);
              draw();
            }
          })
      )),
  );
