import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import DesktopComponent from '../../../components/typhoeOS/Desktop/Desktop';

export default {
  title: 'typhoeOS',
  decorators: [ withKnobs, withA11y ]
};

export const Desktop = () => ({
  components: { DesktopComponent },
  props: {
    showActivity: {
      default: boolean('Show Activity?', false)
    }
  },
  template: '<Desktop-component :show-activity="showActivity" />'
});