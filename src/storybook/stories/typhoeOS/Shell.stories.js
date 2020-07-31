import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import ShellComponent from '../../../components/typhoeOS/Shell/Shell';

export default {
  title: 'typhoeOS',
  decorators: [ withKnobs, withA11y ]
};

export const Shell = () => ({
  components: { ShellComponent },
  template: '<Shell-Component />'
});