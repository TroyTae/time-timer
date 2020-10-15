import {
  $,
  ATTR_ID,
  TAG_NAME_ARTICLE,
  TAG_NAME_HEADER,
} from 'noliter';
import * as styles from './index.scss';
import clock from './clock/clock';

const root = document.createElement('style');

root.innerHTML = `
  :root {
    --primary: #FF9500;
    --secondary: #545456;
    --background: #F2F2F7;
    --on-background: #FFF;
  }
`;

// TODO 별도 UI로 만들기
(window as any).toggleColor = (() => {
  let toggled = false;
  return () => {
    if (toggled) {
      document.head.removeChild(root);
    } else {
      document.head.appendChild(root);
    }
    toggled = !toggled;
  };
})();

document.body.appendChild(
  $(TAG_NAME_ARTICLE)
    .attrs(ATTR_ID, styles.app)
    .append(
      $(TAG_NAME_HEADER)
        .attrs(ATTR_ID, styles.header)
        .append('Time Timer'),
      clock,
    )
    .dom
);
