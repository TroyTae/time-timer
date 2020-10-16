import {getCanvas} from '../clock/red-circle';

const canvas = getCanvas();
const favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
document.head.appendChild(favicon);

export const updateFavicon = () => {
  favicon.href = canvas.toDataURL();
};
