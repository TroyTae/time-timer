import './timer.scss';

import {draw, resize, getCanvas} from './reminder';
import {renderHTML} from 'utility';

const control = document.getElementById('timer');

(() => {
  let curDegree = 90;
  let isDrawing = false;
  const canvas = getCanvas();

  canvas.addEventListener('mousedown', () => {
    isDrawing = true;
  });
  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      const x = e.offsetX - canvas.width / 2;
      const y = e.offsetY - canvas.height / 2;
      let atan = Math.atan(y / x) * 180 / Math.PI;

      if ((x < 0 && 0 < y) || (x < 0 && y < 0)) {
        atan += 270;
      } else {
        atan += 90;
      }
      draw(curDegree = atan);
    }
  }, {
    passive: true
  });
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });
  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
  });
  window.addEventListener('resize', () => {
    resize();
    draw(curDegree);
  });
  resize();
  draw(curDegree);
})();

if (control) {
  // Reset Button
  const reset = renderHTML('<button class="btn reset"></button>');
  reset.addEventListener('click', () => {
    console.log('Reset Event!');
  });
  control.appendChild(reset);

  // Time Text
  const time = renderHTML('<span class="time">15:25</span>');
  control.appendChild(time);

  // Reset Button
  const start = renderHTML('<button class="btn start"></button>');
  start.addEventListener('click', () => {
    console.log('Start Event!');
  });
  control.appendChild(start);
}
