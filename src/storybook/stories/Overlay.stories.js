import { withA11y } from '@storybook/addon-a11y';

import OverlayComponent from '../../components/Overlay/Overlay';

export default {
  title: 'Components',
  decorators: [ withA11y ]
};

export const Overlay = () => ({
  components: { OverlayComponent },
  template: '<OverlayComponent />'
});