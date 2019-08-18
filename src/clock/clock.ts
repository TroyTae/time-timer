import './clock.scss';

import {renderHTML} from '../util/element';

const clock = document.getElementById('clock');

if (clock) {
  // Minute Display
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    // Insert minute dot
    const dot = renderHTML(`<div class="dot m${min}"></div>`);
    clock.appendChild(dot);
    // Insert minute hand
    const hand = renderHTML(`<span class="min m${min}">${min}</span>`);
    hand.addEventListener('click', () => {
      console.log('Click Minute Hand');
    });
    clock.appendChild(hand);
  });
}
