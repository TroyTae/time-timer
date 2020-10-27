import {
  $,
  ATTR_ID,
  PROP_TEXT_CONTENT,
  TAG_NAME_SPAN,
} from 'noliter';
import * as styles from './TimeText.scss';
import { getSeconds } from '/TimeData';

const TimeText = $(TAG_NAME_SPAN).sa(ATTR_ID, styles.timeText);

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

export function syncTimeText() {
  const sec = getSeconds();
  TimeText.sp(PROP_TEXT_CONTENT, `${twoDigits(sec / 60)}:${twoDigits(sec % 60)}`);
}

export default TimeText;
