import {draw} from './reminder';
import {getSeconds} from './timer-model';

const timeText = document.createElement('span');
timeText.className = 'time';

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

function setTimeText() {
  const sec = getSeconds();
  timeText.textContent = `${twoDigits(sec / 60)}:${twoDigits(sec % 60)}`;
  draw();
}

export const getTimeText = () => timeText;
export {setTimeText};
