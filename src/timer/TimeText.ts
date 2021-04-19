import { createElement } from "noliter";
import { subscribeSeconds } from "~/TimeData";
import * as styles from "./TimeText.scss";

const TimeText = createElement("span", (el) => (el.id = styles.timeText));

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

subscribeSeconds((seconds) => {
  TimeText.textContent = `${twoDigits(seconds / 60)}:${twoDigits(
    seconds % 60
  )}`;
});

export default TimeText;
