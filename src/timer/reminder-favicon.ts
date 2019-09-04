import {getCanvas} from './reminder';

const canvas = getCanvas();
const favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
document.head.appendChild(favicon);

export const updateFavicon = () => {
  favicon.href = canvas.toDataURL();
};
