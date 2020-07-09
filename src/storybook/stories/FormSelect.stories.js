import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import FormSelectComponent from '../../components/FormSelect/FormSelect';

export default {
  title: 'Form Elements',
  decorators: [ withKnobs, withA11y ]
};

export const FormSelect = () => ({
  components: { FormSelectComponent },
  props: {
    labelText: {
      default: text('Label Text', 'Please select an option')
    },
  },
  template: `
    <form-select-component
      model="TestValue"
      :label="labelText">
      <option value="Option One">
        Option One
      </option>
      <option value="Option Two">
        Option Two
      </option>
    </form-select-component>
    `
});