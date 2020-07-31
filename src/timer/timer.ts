import './timer.scss';
import spaces from 'one-spaces';

import {getTanDegree} from 'utility';
import {resize, getCanvas} from './reminder';
import {updateFavicon} from './favicon';
import {getTimeText, setTimeText} from './display';
import {getSeconds, setDegree, setSeconds} from './timer-model';

const control = document.getElementById('timer');

if (control) {
  let isStarting = false;

  const reset = document.createElement('button');
  reset.className = spaces('btn', 'reset');
  reset.addEventListener('click', () => {
    setSeconds(900);
    setTimeText();
  });

  const start = document.createElement('button');
  start.className = spaces('btn', 'start');
  start.addEventListener('click', (() => {
    let key: number | null = null;
    const stop = () => {
      isStarting = false;
      reset.disabled = false;
      start.className = spaces('btn', 'start');
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
        start.className = spaces('btn', 'pause');
        key = window.setInterval(() => {
          const sec = getSeconds();
          setSeconds(sec - 1);
          setTimeText();
          if (sec < 1) {
            stop();
            setSeconds(0);
            setTimeText();
          }
          updateFavicon();
        }, 1000);
      }
    };
  })());

  control.appendChild(reset);
  control.appendChild(getTimeText());
  control.appendChild(start);

  (() => {
    let isDrawing = false;
    const canvas = getCanvas();
    const initRemainder = () => {
      resize();
      setTimeText();
    };
    const destroy = () => {
      isDrawing = false;
      updateFavicon();
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
        setTimeText();
      }
    }, {
      passive: true
    });
    canvas.addEventListener('mouseup', destroy);
    canvas.addEventListener('mouseleave', destroy);
    window.addEventListener('resize', initRemainder);
    initRemainder();
    updateFavicon();
  })();
}
