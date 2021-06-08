import { createElement } from "noliter";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";
import { getSeconds, setSeconds } from "~/TimeData";

document.body.appendChild(
  createElement("article", (article) => {
    article.id = "app";
    article.append(
      createElement("header", (header) => {
        header.id = "header";
        header.textContent = "Time Timer";
      }),
      Clock,
      Timer
    );
  })
);

function resize() {
  RedCircle.width = RedCircle.clientWidth;
  RedCircle.height = RedCircle.clientHeight;
  setSeconds(getSeconds());
}
window.addEventListener("resize", resize);
resize();
