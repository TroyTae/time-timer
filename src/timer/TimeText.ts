import { createElement, SPAN } from "noliter";
import * as styles from "./TimeText.scss";

const TimeText = createElement(SPAN, (el) => (el.id = styles.timeText));

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

export function setTimeText(seconds: number) {
  TimeText.textContent = `${twoDigits(seconds / 60)}:${twoDigits(
    seconds % 60
  )}`;
}

export default TimeText;
