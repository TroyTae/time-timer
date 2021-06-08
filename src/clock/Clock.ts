import "./Clock.scss";
import spaces from "one-spaces";
import { createButton, createSection } from "noliter";
import { isStarted, setSeconds } from "~/TimeData";
import RedCircle from "~/clock/RedCircle";

export default createSection((el) => {
  el.id = "clock";
  el.append(
    RedCircle,
    ...[...Array(12)]
      .map((_, i) => (i + 1) * 5)
      .map((min) =>
        createButton((el) => {
          el.textContent = min.toString();
          el.className = spaces("min", `m${min}`);
          el.addEventListener("click", () => {
            if (!isStarted()) {
              setSeconds(min * 60);
            }
          });
        })
      )
  );
});
