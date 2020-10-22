import { $ } from 'noliter';
import RedCircle from './RedCircle';

const favicon = $('link').attrs('rel', 'shortcut icon');

export default favicon;

export function updateFavicon() {
  favicon.attrs('href', RedCircle.dom.toDataURL());
}
