import {renderHTML} from 'utility';
import {draw} from './reminder';
import {getSeconds} from './timer-model';

const timeText = renderHTML('<span class="time"></span>');
const setTimeText = () => {
  const sec = getSeconds();
  let twoDigits = (seconds: number) => `0${Math.floor(seconds)}`.slice(-2);
  timeText.textContent = `${twoDigits(sec / 60)}:${twoDigits(sec % 60)}`;
  draw();
};

export const getTimeText = () => timeText;
export {setTimeText};
