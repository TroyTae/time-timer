import { createElement, append, ARTICLE, HEADER, RESIZE } from "noliter";
import Clock from "~/clock/Clock";
import { draw, resize } from "~/clock/RedCircle";
// import Timer from "~/timer/Timer";
import { setSeconds } from "~/TimeData";
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
      Clock
      // Timer
    );
  })
);

function init() {
  resize();
  draw();
}

window.addEventListener(RESIZE, init);

setSeconds(900);
init();
