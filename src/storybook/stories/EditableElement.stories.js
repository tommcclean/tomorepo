import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import EditableElementComponent from '../../components/EditableElement/Index';

export default {
  title: 'Components',
  decorators: [ withKnobs, withA11y ]
};

export const EditableElement = () => ({
  components: { EditableElementComponent },
  props: {
    element: {
      default: select('Element Type', ['h1', 'p'])
    },
    text: {
      default: text('Element Text', 'This is an editable element, click me to change the content')
    }
  },
  template: `
      <editable-element-component
        :element="element"
        :text="text" />
    `
});