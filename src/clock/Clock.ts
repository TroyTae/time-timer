import spaces from "one-spaces";
import { createElement } from "noliter";
import { isStarted, setSeconds } from "~/TimeData";
import RedCircle from "~/clock/RedCircle";
import * as styles from "./Clock.scss";

export default createElement("section", (el) => {
  el.id = styles.clock;
  el.append(
    RedCircle,
    ...[...Array(12)]
      .map((_, i) => (i + 1) * 5)
      .map((min) =>
        createElement("button", (el) => {
          el.textContent = min.toString();
          el.className = spaces(styles.min, styles[`m${min}`]);
          el.addEventListener("click", () => {
            if (!isStarted()) {
              setSeconds(min * 60);
            }
          });
        })
      )
  );
});
