import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import TaskbarComponent from '../../../components/typhoeOS/Taskbar/Taskbar';

export default {
  title: 'TyphoeOS',
  decorators: [ withKnobs, withA11y ]
};

export const Taskbar = () => ({
  components: { TaskbarComponent },
  template: '<taskbar-component />'
});