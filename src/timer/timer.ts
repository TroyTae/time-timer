import './timer.scss';

import {draw, resize, getCanvas} from './reminder';
import {renderHTML, getTanDegree} from 'utility';

const control = document.getElementById('timer');

if (control) {
  let isStarting = false;
  let curSecond = 900;
  let curDegree = 270;

  // Reset Button
  const reset = renderHTML('<button class="btn reset"></button>') as HTMLButtonElement;
  reset.addEventListener('click', () => {
    draw(curDegree = 270);
    setTime(curSecond = 900);
  });
  control.appendChild(reset);

  // Time Text
  const time = renderHTML('<span class="time">15:25</span>');
  const setTime = (sec: number) => {
    let t = (tt: number) => `0${Math.floor(tt)}`.slice(-2);
    time.textContent = `${t(sec / 60)}:${t(sec % 60)}`;
  };
  control.appendChild(time);

  // Reset Button
  const start = renderHTML('<button class="btn start"></button>');
  start.addEventListener('click', (() => {
    let key: number | null = null;
    return () => {
      if (isStarting && key) {
        isStarting = false;
        reset.disabled = false;
        start.className = 'btn start';
        clearInterval(key);
      } else {
        isStarting = true;
        reset.disabled = true;
        start.className = 'btn pause';
        key = window.setInterval(() => {
          --curSecond;
          setTime(curSecond);
          draw(360 - (curSecond / 10));
          if (curSecond < 1 && key) {
            clearInterval(key);
            curDegree = 360;
            curSecond = 0;
            isStarting = false;
            reset.disabled = false;
            start.className = 'btn start';
            draw(curDegree);
            setTime(curSecond);
          }
        }, 1000);
      }
    };
  })());
  control.appendChild(start);

  (() => {
    let isDrawing = false;
    const canvas = getCanvas();
    const initRemainder = () => {
      resize();
      draw(curDegree);
      setTime(curSecond);
    };

    canvas.addEventListener('mousedown', () => (isDrawing = true));
    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing && !isStarting) {
        const x = e.offsetX - canvas.width / 2;
        const y = e.offsetY - canvas.height / 2;
        const degree = getTanDegree(x, y);

        if ((x <= 0 && 0 <= y) || (x <= 0 && y <= 0)) {
          curDegree = degree + 270;
        } else {
          curDegree = degree + 90;
        }
        curSecond = (360 - curDegree) * 10;
        draw(curDegree);
        setTime(curSecond);
      }
    }, {
      passive: true
    });
    canvas.addEventListener('mouseup', () => (isDrawing = false));
    canvas.addEventListener('mouseleave', () => (isDrawing = false));
    window.addEventListener('resize', initRemainder);
    initRemainder();
  })();
}
