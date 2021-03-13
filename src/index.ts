import {
  $,
  ID,
  ARTICLE,
  HEADER,
  RESIZE,
} from 'noliter';
import * as styles from './index.scss';
import Clock from './clock/Clock';
import Timer from './timer/Timer';
import { setSeconds } from './TimeData';
import { draw, resize } from './clock/RedCircle';

document.body.appendChild(
  $(ARTICLE)
    .set(ID, styles.app)
    .add(
      $(HEADER)
        .set(ID, styles.header)
        .add('Time Timer'),
      Clock,
      Timer,
    )
    .dom
);

window.addEventListener(RESIZE, function() {
  resize();
  draw();
});

resize();
setSeconds(900);
