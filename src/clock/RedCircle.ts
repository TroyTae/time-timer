import { createElement } from "noliter";
import {
  setDegree,
  isModified,
  setModified,
  isStarted,
  syncView,
} from "~/TimeData";
import * as styles from "./RedCircle.scss";

const favicon = createElement("link", (link) => {
  link.rel = "shortcut icon";
});
document.head.appendChild(favicon);

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

const RedCircle = createElement("canvas", (el) => {
  el.id = styles.canvas;
  el.addEventListener(
    "mousemove",
    (e) =>
      drawWithCoordinate(
        e.offsetX - RedCircle.width / 2,
        e.offsetY - RedCircle.height / 2
      ),
    { passive: true }
  );
  el.addEventListener(
    "touchmove",
    (e) => {
      const touch = e.touches[0];
      const rect = RedCircle.getBoundingClientRect();
      drawWithCoordinate(
        touch.pageX - rect.x - RedCircle.width / 2,
        touch.pageY - rect.y - RedCircle.height / 2
      );
    },
    { passive: true }
  );
  el.addEventListener("mousedown", startHandling);
  el.addEventListener("touchstart", startHandling);
  el.addEventListener("mouseup", stopHandling);
  el.addEventListener("mouseleave", stopHandling);
  el.addEventListener("touchend", stopHandling);
});
const context = RedCircle.getContext("2d");

export function draw(degree: number) {
  const w = RedCircle.width;
  const h = RedCircle.height;
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
