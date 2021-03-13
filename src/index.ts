import {
  $,
  ID,
  RESIZE,
  ARTICLE,
  HEADER,
} from 'noliter';
import * as styles from './index.scss';
import Clock from './clock/Clock';
import Timer from './timer/Timer';
import { draw, resize } from './clock/RedCircle';
import { setSeconds } from './TimeData';

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

function redraw() {
  resize();
  draw();
  setSeconds(900);
}

window.addEventListener(RESIZE, redraw);

redraw();
