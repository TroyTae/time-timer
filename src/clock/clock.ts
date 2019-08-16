import './clock.scss';

const clock = document.getElementById('clock');

if (clock) {
  // Minute Display
  const temp = document.createElement('div');
  Array(12).fill(null).forEach((v, i) => {
    const min = i * 5;
    // Insert minute dot
    temp.innerHTML = `<div class="dot m${min}"></div>`;
    const dot = temp.children[0];
    clock.appendChild(dot);
    // Insert minute hand
    temp.innerHTML = `<span class="min m${min}">${min}</span>`;
    const hand = temp.children[0];
    hand.addEventListener('click', () => {
      console.log('Click Minute Hand');
    });
    clock.appendChild(hand);
  });

  // Canvas Fill Control
  const circle = clock.querySelector('.circle');

  if (circle) {
    const canvas = document.createElement('canvas');
    const resize = () => {
      canvas.width = circle.clientWidth;
      canvas.height = circle.clientHeight;
    };
    resize();

    const context = canvas.getContext('2d');
    if (context) {
      const draw = () => {
        context.fillStyle = '#E31936';
        context.beginPath();
        context.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
            Math.PI / 2 * 3,
            Math.PI / 3 * 2,
            true
        );
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.closePath();
        context.fill();
      };
      window.addEventListener('resize', () => {
        resize();
        draw();
      });
      circle.appendChild(canvas);
      draw();
    }
  }
}
