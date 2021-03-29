import spaces from "one-spaces";
import {
  createElement,
  addEventListener,
  DIV,
  SECTION,
  BUTTON,
  CLICK,
  append,
} from "noliter";
import RedCircle, { draw } from "~/clock/RedCircle";
import { isStarted, setSeconds } from "~/TimeData";
import * as styles from "./Clock.scss";

export default createElement(SECTION, (el) => {
  el.id = styles.clock;
  append(
    el,
    createElement(DIV, (el) => {
      el.id = styles.circle;
      append(el, RedCircle);
    }),
    ...[...Array(12)]
      .map((v, i) => i * 5)
      .map((min) =>
        createElement(BUTTON, (el) => {
          el.textContent = min.toString();
          el.className = spaces(styles.min, styles[`m${min}`]);
          addEventListener(el, CLICK, () => {
            if (!isStarted()) {
              setSeconds(min * 60);
              draw();
            }
          });
        })
      )
  );
});
