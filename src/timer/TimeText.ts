import {
  $,
  ID,
  TEXT_CONTENT,
  SPAN,
} from 'noliter';
import * as styles from './TimeText.scss';
import { getSeconds } from '/TimeData';

const TimeText = $(SPAN).set(ID, styles.timeText);

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

export function syncTimeText() {
  const sec = getSeconds();
  TimeText.set(TEXT_CONTENT, `${twoDigits(sec / 60)}:${twoDigits(sec % 60)}`);
}

export default TimeText;
