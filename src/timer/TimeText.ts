import "./TimeText.scss";
import { createSpan } from "noliter";
import { subscribeSeconds } from "~/TimeData";

const TimeText = createSpan((el) => (el.id = "timeText"));

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

subscribeSeconds((seconds) => {
  TimeText.textContent = `${twoDigits(seconds / 60)}:${twoDigits(
    seconds % 60
  )}`;
});

export default TimeText;
