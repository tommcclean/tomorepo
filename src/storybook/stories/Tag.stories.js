import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import TagComponent from '../../components/Tag/Index';

export default {
  title: 'Components',
  decorators: [ withKnobs, withA11y ]
};

export const Tag = () => ({
  components: { TagComponent },
  props: {
    text: {
      default: text('Tag Text', 'My First Tag')
    },
  },
  template: '<tag-component :text="text" />'
});