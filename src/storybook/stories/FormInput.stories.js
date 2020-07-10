import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import FormInputComponent from '../../components/FormInput/Index';

export default {
  title: 'Form Elements',
  decorators: [ withKnobs, withA11y ]
};

export const FormInput = () => ({
  components: { FormInputComponent },
  props: {
    labelText: {
      default: text('Label Text', 'Input Field')
    },
    fieldType: {
      default: select('Element Type', ['input', 'textarea'])
    },
    inputType: {
      default: select('Input Type', ['text', 'email', 'password'])
    },
    isRequired: {
      default: boolean('Is Required', true)
    }
  },
  template: `
  <form>
    <form-input-component
      :field-type="fieldType"
      :label="labelText"
      :type="inputType"
      :is-required="isRequired" />
  </form>
    `
});