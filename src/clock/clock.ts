import './clock.scss';
import spaces from 'one-spaces';

const clock = document.getElementById('clock');

if (clock) {
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    const dot = document.createElement('div');
    dot.className = spaces('dot', `m${min}`);
    const num = document.createElement('span');
    num.className = spaces('min', `m${min}`);
    num.textContent = min.toString();
    clock.appendChild(dot);
    clock.appendChild(num);
  });
}
