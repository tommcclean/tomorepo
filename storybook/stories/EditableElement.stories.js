import { withKnobs, text, select } from '@storybook/addon-knobs'

import EditableElementComponent from '../../components/editable-element/src/EditableElement';

export default {
  title: 'Components',
  decorators: [ withKnobs ]
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