import {getRadian} from '/utility';
import {getDegree} from '../time-data';

const Reminder = (() => {
  const circle = document.querySelector('#clock > .circle');

  if (circle) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      circle.appendChild(canvas);

      return {
        draw: () => {
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
        },
        resize: () => {
          canvas.width = circle.clientWidth;
          canvas.height = circle.clientHeight;
        },
        getCanvas: () => canvas,
      };
    }
  }
  throw 'Reminder is not rendered properly.';
})();

export const draw = Reminder.draw;
export const resize = Reminder.resize;
export const getCanvas = Reminder.getCanvas;
