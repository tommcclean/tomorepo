import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import SpoilerComponent from '../../components/Spoiler/Index';

export default {
  title: 'Components',
  decorators: [ withKnobs, withA11y ]
};

export const Spoiler = () => ({
  components: { SpoilerComponent },
  props: {
    title: {
      default: text('Spoiler Text', 'My First Spoiler')
    },
    isLight: {
      default: boolean('Light Mode', false)
    },
  },
  template: `
    <spoiler-component :title="title" :is-light="isLight">
      <p>This is the result (Injected via slot)</p>
    </spoiler-component>
  `
});