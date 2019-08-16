import './timer.scss';

const timer = document.getElementById('timer');

if (timer) {
  const temp = document.createElement('div');

  // Reset Button
  temp.innerHTML = '<button class="btn reset"></button>';
  const reset = temp.children[0];
  reset.addEventListener('click', () => {
    console.log('Reset Event!');
  });
  timer.appendChild(reset);

  // Time Text
  temp.innerHTML = '<span class="time">15:25</span>';
  const time = temp.children[0];
  timer.appendChild(time);

  // Reset Button
  temp.innerHTML = '<button class="btn start"></button>';
  const start = temp.children[0];
  start.addEventListener('click', () => {
    console.log('Start Event!');
  });
  timer.appendChild(start);
}
