import './timer.scss';
import {renderHTML} from '../util/element';

const timer = document.getElementById('timer');

if (timer) {
  // Reset Button
  const reset = renderHTML('<button class="btn reset"></button>');
  reset.addEventListener('click', () => {
    console.log('Reset Event!');
  });
  timer.appendChild(reset);

  // Time Text
  const time = renderHTML('<span class="time">15:25</span>');
  timer.appendChild(time);

  // Reset Button
  const start = renderHTML('<button class="btn start"></button>');
  start.addEventListener('click', () => {
    console.log('Start Event!');
  });
  timer.appendChild(start);
}
