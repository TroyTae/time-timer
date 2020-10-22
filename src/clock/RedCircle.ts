import {
  $,
  ATTR_ID,
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
  getDrawing,
  setDrawing,
  getStarting,
} from '../time-data';
import { updateFavicon } from './Favicon';

const RedCircle = $(TAG_NAME_CANVAS)
  .attrs(ATTR_ID, styles.canvas)
  .on(EVENT_TYPE_MOUSEMOVE, (e) => {
    if (getDrawing() && !getStarting()) {
      const x = e.offsetX - canvas.width / 2;
      const y = e.offsetY - canvas.height / 2;
      const degree = getTanDegree(x, y);

      if ((x < 0 && 0 <= y) || (x < 0 && y < 0)) {
        setDegree(degree + 270);
      } else {
        setDegree(degree + 90);
      }
      draw();
    }
  }, { passive: true })
  .on(EVENT_TYPE_MOUSEDOWN, () => setDrawing(true))
  .on(EVENT_TYPE_MOUSEUP, stopHandling)
  .on(EVENT_TYPE_MOUSELEAVE, stopHandling);
const canvas = RedCircle.dom;
const context = canvas.getContext('2d');


function getRadian(degree: number) {
  return Math.PI / 180 * degree;
}

function getTanDegree(x: number, y: number) {
  return Math.atan(y / x) * 180 / Math.PI;
}

function stopHandling() {
  setDrawing(false);
  updateFavicon();
}

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
}

export function resize() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

export default RedCircle;
