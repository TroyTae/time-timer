import {
  createElement,
  APPEND,
  CANVAS,
  MOUSEDOWN,
  MOUSELEAVE,
  MOUSEMOVE,
  MOUSEUP,
  TOUCHSTART,
  TOUCHEND,
  TOUCHMOVE,
  REL,
  LINK,
  ADD_EVENT_LISTENER,
  OFFSET_X,
  OFFSET_Y,
  WIDTH,
  HEIGHT,
  ID,
  TOUCHES,
  PAGE_X,
  PAGE_Y,
} from "noliter";
import {
  setDegree,
  isModified,
  setModified,
  isStarted,
  syncView,
} from "~/TimeData";
import * as styles from "./RedCircle.scss";

const favicon = createElement(LINK, (link) => {
  link[REL] = "shortcut icon";
});
document.head[APPEND](favicon);

function startHandling() {
  setModified(true);
}

function stopHandling() {
  setModified(false);
}

function getRadian(degree: number) {
  return (Math.PI / 180) * degree;
}

function getTanDegree(x: number, y: number) {
  return (Math.atan(y / x) * 180) / Math.PI;
}

function drawWithCoordinate(x: number, y: number) {
  if (isModified() && !isStarted()) {
    const degree = getTanDegree(x, y);
    if ((x < 0 && 0 <= y) || (x < 0 && y < 0)) {
      setDegree(degree + 270);
    } else {
      setDegree(degree + 90);
    }
    syncView();
  }
}

const RedCircle = createElement(CANVAS, (el) => {
  el[ID] = styles.canvas;
  el[ADD_EVENT_LISTENER](
    MOUSEMOVE,
    (e) =>
      drawWithCoordinate(
        e[OFFSET_X] - RedCircle[WIDTH] / 2,
        e[OFFSET_Y] - RedCircle[HEIGHT] / 2
      ),
    { passive: true }
  );
  el[ADD_EVENT_LISTENER](
    TOUCHMOVE,
    (e) => {
      const touch = e[TOUCHES][0];
      const rect = RedCircle.getBoundingClientRect();
      drawWithCoordinate(
        touch[PAGE_X] - rect.x - RedCircle[WIDTH] / 2,
        touch[PAGE_Y] - rect.y - RedCircle[HEIGHT] / 2
      );
    },
    { passive: true }
  );
  el[ADD_EVENT_LISTENER](MOUSEDOWN, startHandling);
  el[ADD_EVENT_LISTENER](TOUCHSTART, startHandling);
  el[ADD_EVENT_LISTENER](MOUSEUP, stopHandling);
  el[ADD_EVENT_LISTENER](MOUSELEAVE, stopHandling);
  el[ADD_EVENT_LISTENER](TOUCHEND, stopHandling);
});
const context = RedCircle.getContext("2d");

export function draw(degree: number) {
  const w = RedCircle[WIDTH];
  const h = RedCircle[HEIGHT];
  const cx = w / 2;
  const cy = h / 2;

  context.clearRect(0, 0, w, h);
  context.fillStyle = "#E31936";
  context.beginPath();
  context.arc(cx, cy, cx, getRadian(270), getRadian(degree - 90), true);
  context.lineTo(cx, cy);
  context.closePath();
  context.fill();

  favicon.href = RedCircle.toDataURL();
}

export default RedCircle;
