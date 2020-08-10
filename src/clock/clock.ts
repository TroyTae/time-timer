import * as styles from './clock.scss';
import spaces from 'one-spaces';

const clock = document.getElementById('clock');

if (clock) {
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    const dot = document.createElement('div');
    dot.className = spaces(styles.dot, styles[`m${min}`]);
    const num = document.createElement('span');
    num.className = spaces(styles.min, styles[`m${min}`]);
    num.textContent = min.toString();
    clock.appendChild(dot);
    clock.appendChild(num);
  });
}
