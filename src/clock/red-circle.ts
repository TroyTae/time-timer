import clock from './clock';
import {getDegree} from '../time-data';

function getRadian(degree: number) {
  return Math.PI / 180 * degree;
}

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function draw() {
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

function resize() {
  canvas.width = clock.dom.clientWidth;
  canvas.height = clock.dom.clientHeight;
}

export {
  canvas,
  draw,
  resize,
};
