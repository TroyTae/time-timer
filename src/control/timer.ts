const circle = document.querySelector('#clock > .circle');

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
