import {
  $,
  ATTR_ID,
  EVENT_TYPE_RESIZE,
  TAG_NAME_ARTICLE,
  TAG_NAME_HEADER,
} from 'noliter';
import * as styles from './index.scss';
import Clock from './clock/Clock';
import Timer from './timer/Timer';
import { draw, resize } from './clock/RedCircle';
import { syncTimeText } from './timer/TimeText';

document.body.appendChild(
  $(TAG_NAME_ARTICLE)
    .sa(ATTR_ID, styles.app)
    .add(
      $(TAG_NAME_HEADER)
        .sa(ATTR_ID, styles.header)
        .add('Time Timer'),
      Clock,
      Timer,
    )
    .dom
);

function init() {
  resize();
  draw();
  syncTimeText();
}

window.addEventListener(EVENT_TYPE_RESIZE, init);

init();
