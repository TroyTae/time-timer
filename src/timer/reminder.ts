const Reminder = (() => {
  const circle = document.querySelector('#clock > .circle');

  if (circle) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      circle.appendChild(canvas);

      return {
        draw: () => {
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
        },
        resize: () => {
          canvas.width = circle.clientWidth;
          canvas.height = circle.clientHeight;
        },
      };
    }
  }
  throw 'Reminder is not rendered properly.';
})();

export const draw = Reminder.draw;
export const resize = Reminder.resize;
