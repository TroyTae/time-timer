import { createElement } from "noliter";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";
import { getSeconds, setSeconds } from "~/TimeData";
import * as styles from "./index.scss";

document.body.appendChild(
  createElement("article", (article) => {
    article.id = styles.app;
    article.append(
      createElement("header", (header) => {
        header.id = styles.header;
        header.textContent = "Time Timer";
      }),
      Clock,
      Timer
    );
  })
);

function resize() {
  RedCircle.width = RedCircle.parentElement.clientWidth;
  RedCircle.height = RedCircle.parentElement.clientHeight;
  setSeconds(getSeconds());
}
window.addEventListener("resize", resize);
resize();
