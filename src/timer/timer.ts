import './timer.scss';

import {renderHTML, getTanDegree} from 'utility';
import {draw, resize, getCanvas} from './reminder';
import {getSeconds, setDegree, setSeconds} from './timer-model';

const control = document.getElementById('timer');

if (control) {
  let isStarting = false;

  // Reset Button
  const reset = renderHTML('<button class="btn reset"></button>') as HTMLButtonElement;
  reset.addEventListener('click', () => {
    setDegree(270);
    setSeconds(900);
    draw();
    setTime();
  });
  control.appendChild(reset);

  // Time Text
  const time = renderHTML('<span class="time"></span>');
  const setTime = () => {
    const sec = getSeconds();
    let t = (tt: number) => `0${Math.floor(tt)}`.slice(-2);
    time.textContent = `${t(sec / 60)}:${t(sec % 60)}`;
  };
  control.appendChild(time);

  // Reset Button
  const start = renderHTML('<button class="btn start"></button>');
  start.addEventListener('click', (() => {
    let key: number | null = null;
    const stop = () => {
      isStarting = false;
      reset.disabled = false;
      start.className = 'btn start';
      if (key) {
        clearInterval(key);
      }
    };
    return () => {
      if (isStarting) {
        stop();
      } else {
        isStarting = true;
        reset.disabled = true;
        start.className = 'btn pause';
        key = window.setInterval(() => {
          const sec = getSeconds();
          setSeconds(sec - 1);
          setTime();
          draw();
          if (sec < 1) {
            stop();
            setSeconds(0);
            draw();
            setTime();
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
      draw();
      setTime();
    };

    canvas.addEventListener('mousedown', () => (isDrawing = true));
    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing && !isStarting) {
        const x = e.offsetX - canvas.width / 2;
        const y = e.offsetY - canvas.height / 2;
        const degree = getTanDegree(x, y);

        if ((x < 0 && 0 <= y) || (x < 0 && y < 0)) {
          setDegree(degree + 270);
        } else {
          setDegree(degree + 90);
        }
        draw();
        setTime();
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
