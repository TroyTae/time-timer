import "./RedCircle.scss";
import { createLink, createCanvas } from "noliter";
import {
  isModified,
  setModified,
  isStarted,
  setSeconds,
  subscribeSeconds,
} from "~/TimeData";

const favicon = createLink((link) => {
  link.rel = "shortcut icon";
  document.head.appendChild(link);
});

function getRadian(degree: number) {
  return (Math.PI / 180) * degree;
}

function drawWithCoordinate(x: number, y: number) {
  if (isModified() && !isStarted()) {
    const degree = (Math.atan(y / x) * 180) / Math.PI;
    const isPositive = (x < 0 && 0 <= y) || (x < 0 && y < 0);
    setSeconds(Math.round(((isPositive ? 90 : 270) - degree) * 10));
  }
}

const RedCircle = createCanvas((el) => {
  el.id = "canvas";
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
  el.addEventListener("mousedown", () => setModified(true));
  el.addEventListener("touchstart", () => setModified(true));
  el.addEventListener("mouseup", () => setModified(false));
  el.addEventListener("mouseleave", () => setModified(false));
  el.addEventListener("touchend", () => setModified(false));
});
const context = RedCircle.getContext("2d");

subscribeSeconds((seconds) => {
  const degree = 360 - seconds / 10;
  const w = RedCircle.width;
  const h = RedCircle.height;
  const cx = w / 2;
  const cy = h / 2;

  context.clearRect(0, 0, w, h);
  context.beginPath();
  context.arc(cx, cy, cx, getRadian(270), getRadian(degree - 90));
  context.lineTo(cx, cy);
  context.closePath();
  context.fillStyle = "#FFF";
  context.fill();
  context.beginPath();
  context.arc(cx, cy, cx, getRadian(270), getRadian(degree - 90), true);
  context.lineTo(cx, cy);
  context.closePath();
  context.fillStyle = "#E31936";
  context.fill();

  favicon.href = RedCircle.toDataURL();
});

export default RedCircle;
