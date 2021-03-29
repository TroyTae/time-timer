import { createElement, append, ARTICLE, HEADER, RESIZE } from "noliter";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";
import { syncView } from "~/TimeData";
import * as styles from "./index.scss";

append(
  document.body,
  createElement(ARTICLE, (article) => {
    article.id = styles.app;
    append(
      article,
      createElement(HEADER, (header) => {
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
window.addEventListener(RESIZE, init);
init();
