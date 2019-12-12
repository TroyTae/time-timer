import './clock.scss';

import {renderHTML} from 'utility';

const clock = document.getElementById('clock');

if (clock) {
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    clock.appendChild(renderHTML(`<div class="dot m${min}"></div>`));
    clock.appendChild(renderHTML(`<span class="min m${min}">${min}</span>`));
  });
}
