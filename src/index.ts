import "./index.scss";
import { createArticle, createHeader } from "noliter";
import { getSeconds, setSeconds } from "~/TimeData";
import Clock from "~/clock/Clock";
import RedCircle from "~/clock/RedCircle";
import Timer from "~/timer/Timer";

document.body.appendChild(
  createArticle((article) => {
    article.id = "app";
    article.append(
      createHeader((header) => {
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
