import { withA11y } from '@storybook/addon-a11y';

import OverlayComponent from '../../components/Overlay/Index';

export default {
  title: 'Utilities',
  decorators: [ withA11y ]
};

export const Overlay = () => ({
  components: { OverlayComponent },
  template: '<OverlayComponent />'
});