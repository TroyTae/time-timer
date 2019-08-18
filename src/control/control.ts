import './control.scss';
import {renderHTML} from '../util/element';

const control = document.getElementById('timer');

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
