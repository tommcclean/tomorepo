import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import FormSelectComponent from '../../components/FormSelect/FormSelect';

export default {
  title: 'Form Elements',
  decorators: [ withKnobs ]
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