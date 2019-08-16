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

  // Minute Text
  temp.innerHTML = '<span class="time min">15</span>';
  const min = temp.children[0];
  timer.appendChild(min);

  // Colon Text
  temp.innerHTML = '<span class="time colon">:</span>';
  const colon = temp.children[0];
  timer.appendChild(colon);

  // Sec Text
  temp.innerHTML = '<span class="time sec">45</span>';
  const sec = temp.children[0];
  timer.appendChild(sec);

  // Reset Button
  temp.innerHTML = '<button class="btn start"></button>';
  const start = temp.children[0];
  start.addEventListener('click', () => {
    console.log('Start Event!');
  });
  timer.appendChild(start);
}
