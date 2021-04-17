import { createElement } from "noliter";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";
import { syncView } from "~/TimeData";
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

function init() {
  RedCircle.width = RedCircle.parentElement.clientWidth;
  RedCircle.height = RedCircle.parentElement.clientHeight;
  syncView();
}
window.addEventListener("resize", init);
init();
