import spaces from "one-spaces";
import {
  createElement,
  DIV,
  SECTION,
  BUTTON,
  CLICK,
  ID,
  TEXT_CONTENT,
  CLASS_NAME,
  APPEND,
  ADD_EVENT_LISTENER,
} from "noliter";
import { isStarted, setSeconds, syncView } from "~/TimeData";
import RedCircle from "~/clock/RedCircle";
import * as styles from "./Clock.scss";

export default createElement(SECTION, (el) => {
  el[ID] = styles.clock;
  el[APPEND](
    createElement(DIV, (el) => {
      el[ID] = styles.circle;
      el[APPEND](RedCircle);
    }),
    ...[...Array(12)]
      .map((_, i) => i * 5)
      .map((min) =>
        createElement(BUTTON, (el) => {
          el[TEXT_CONTENT] = min.toString();
          el[CLASS_NAME] = spaces(styles.min, styles[`m${min}`]);
          el[ADD_EVENT_LISTENER](CLICK, () => {
            if (!isStarted()) {
              setSeconds(min * 60);
              syncView();
            }
          });
        })
      )
  );
});
