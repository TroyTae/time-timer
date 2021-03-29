import {
  createElement,
  ARTICLE,
  HEADER,
  RESIZE,
  ID,
  TEXT_CONTENT,
  WIDTH,
  HEIGHT,
  PARENT_ELEMENT,
  CLIENT_WIDTH,
  CLIENT_HEIGHT,
  APPEND,
} from "noliter";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";
import { syncView } from "~/TimeData";
import * as styles from "./index.scss";

document.body[APPEND](
  createElement(ARTICLE, (article) => {
    article[ID] = styles.app;
    article[APPEND](
      createElement(HEADER, (header) => {
        header[ID] = styles.header;
        header[TEXT_CONTENT] = "Time Timer";
      }),
      Clock,
      Timer
    );
  })
);

function init() {
  RedCircle[WIDTH] = RedCircle[PARENT_ELEMENT][CLIENT_WIDTH];
  RedCircle[HEIGHT] = RedCircle[PARENT_ELEMENT][CLIENT_HEIGHT];
  syncView();
}
window.addEventListener(RESIZE, init);
init();
