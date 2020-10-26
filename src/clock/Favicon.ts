import { $, ATTR_HREF } from 'noliter';
import RedCircle from './RedCircle';

const favicon = $('link').sa('rel', 'shortcut icon');

export default favicon;

export function updateFavicon() {
  favicon.sa(ATTR_HREF, RedCircle.dom.toDataURL());
}
