import './timer.scss';

import {draw, resize, getCanvas} from './reminder';
import {renderHTML, getTanDegree} from 'utility';

const control = document.getElementById('timer');

(() => {
  let curDegree = 90;
  let isDrawing = false;
  const canvas = getCanvas();
  const initRemainder = () => {
    resize();
    draw(curDegree);
  };

  canvas.addEventListener('mousedown', () => (isDrawing = true));
  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      const x = e.offsetX - canvas.width / 2;
      const y = e.offsetY - canvas.height / 2;
      const degree = getTanDegree(x, y);

      if ((x < 0 && 0 < y) || (x < 0 && y < 0)) {
        draw(degree + 270);
      } else {
        draw(degree + 90);
      }
    }
  }, {
    passive: true
  });
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mouseleave', () => (isDrawing = false));
  window.addEventListener('resize', initRemainder);
  initRemainder();
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
