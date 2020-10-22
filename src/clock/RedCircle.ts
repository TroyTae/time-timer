import {
  $,
  ATTR_ID,
  TAG_NAME_CANVAS,
} from 'noliter';
import * as styles from './RedCircle.scss';
import { getDegree } from '../time-data';

const RedCircle = $(TAG_NAME_CANVAS).attrs(ATTR_ID, styles.canvas);
const canvas = RedCircle.dom;
const context = canvas.getContext('2d');

function getRadian(degree: number) {
  return Math.PI / 180 * degree;
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
