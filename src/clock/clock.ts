import './clock.scss';

const temp = document.createElement('div');
const clock = document.getElementById('clock');

if (clock) {
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    // Insert minute dot
    temp.innerHTML = `<div class="dot m${min}"></div>`;
    const dot = temp.children[0];
    clock.appendChild(dot);
    // Insert minute hand
    temp.innerHTML = `<button class="min m${min}">${min}</button>`;
    const hand = temp.children[0];
    hand.addEventListener('click', () => {
      console.log('Click Minute Hand');
    });
    clock.appendChild(hand);
  });
}
