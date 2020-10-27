import {
  $,
  ATTR_ID,
  ATTR_HREF,
  EVENT_TYPE_MOUSEDOWN,
  EVENT_TYPE_MOUSELEAVE,
  EVENT_TYPE_MOUSEMOVE,
  EVENT_TYPE_MOUSEUP,
  TAG_NAME_CANVAS,
} from 'noliter';
import * as styles from './RedCircle.scss';
import {
  getDegree,
  setDegree,
  isModified,
  setModified,
  isStarted,
} from '../TimeData';
import { syncTimeText } from '/timer/TimeText';

const Favicon = $('link').sa('rel', 'shortcut icon');
document.head.appendChild(Favicon.dom);

function startHandling() {
  setModified(true);
}

function stopHandling() {
  setModified(false);
}

function getRadian(degree: number) {
  return Math.PI / 180 * degree;
}

function getTanDegree(x: number, y: number) {
  return Math.atan(y / x) * 180 / Math.PI;
}

const RedCircle = $(TAG_NAME_CANVAS)
  .sa(ATTR_ID, styles.canvas)
  .on(EVENT_TYPE_MOUSEMOVE, function (e) {
    if (isModified() && !isStarted()) {
      const x = e.offsetX - canvas.width / 2;
      const y = e.offsetY - canvas.height / 2;
      const degree = getTanDegree(x, y);
      if ((x < 0 && 0 <= y) || (x < 0 && y < 0)) {
        setDegree(degree + 270);
      } else {
        setDegree(degree + 90);
      }
      syncTimeText();
      draw();
    }
  }, { passive: true })
  .on(EVENT_TYPE_MOUSEDOWN, startHandling)
  .on(EVENT_TYPE_MOUSEUP, stopHandling)
  .on(EVENT_TYPE_MOUSELEAVE, stopHandling);

const canvas = RedCircle.dom;
const context = canvas.getContext('2d');

export function draw() {
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;

  context.clearRect(0, 0, w, h);
  context.fillStyle = '#E31936';
  context.beginPath();
  context.arc(
    cx,
    cy,
    cx,
    getRadian(270),
    getRadian(getDegree() - 90),
    true
  );
  context.lineTo(cx, cy);
  context.closePath();
  context.fill();

  Favicon.sa(ATTR_HREF, RedCircle.dom.toDataURL());
}

export function resize() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

export default RedCircle;
