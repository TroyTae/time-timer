const Reminder = (() => {
  const circle = document.querySelector('#clock > .circle');

  if (circle) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      circle.appendChild(canvas);

      return {
        draw: (degree: number) => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = '#E31936';
          context.beginPath();
          context.arc(
              canvas.width / 2,
              canvas.height / 2,
              canvas.width / 2,
              Math.PI / 180 * 270,
            Math.PI  / 180 * (degree - 90),
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
        getCanvas: () => canvas,
      };
    }
  }
  throw 'Reminder is not rendered properly.';
})();

export const draw = Reminder.draw;
export const resize = Reminder.resize;
export const getCanvas = Reminder.getCanvas;
