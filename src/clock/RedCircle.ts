import {
  append,
  createElement,
  CANVAS,
  MOUSEDOWN,
  MOUSELEAVE,
  MOUSEMOVE,
  MOUSEUP,
  TOUCHSTART,
  TOUCHEND,
  TOUCHMOVE,
  LINK,
  addEventListener,
} from "noliter";
import * as styles from "./RedCircle.scss";
import {
  getDegree,
  setDegree,
  isModified,
  setModified,
  isStarted,
} from "../TimeData";

const favicon = createElement(LINK, (link) => {
  link.rel = "shortcut icon";
});
append(document.head, favicon);

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
    draw();
  }
}

const canvas = createElement(CANVAS, (el) => (el.id = styles.canvas));
const context = canvas.getContext("2d");
addEventListener(
  canvas,
  MOUSEMOVE,
  (e) =>
    drawWithCoordinate(
      e.offsetX - canvas.width / 2,
      e.offsetY - canvas.height / 2
    ),
  { passive: true }
);
addEventListener(
  canvas,
  TOUCHMOVE,
  (e) => {
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    drawWithCoordinate(
      touch.pageX - rect.x - canvas.width / 2,
      touch.pageY - rect.y - canvas.height / 2
    );
  },
  { passive: true }
);
addEventListener(canvas, MOUSEDOWN, startHandling);
addEventListener(canvas, TOUCHSTART, startHandling);
addEventListener(canvas, MOUSEUP, stopHandling);
addEventListener(canvas, MOUSELEAVE, stopHandling);
addEventListener(canvas, TOUCHEND, stopHandling);

function resize() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

function draw() {
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;

  context.clearRect(0, 0, w, h);
  context.fillStyle = "#E31936";
  context.beginPath();
  context.arc(cx, cy, cx, getRadian(270), getRadian(getDegree() - 90), true);
  context.lineTo(cx, cy);
  context.closePath();
  context.fill();

  favicon.href = canvas.toDataURL();
}

export { resize, draw };

export default canvas;
