import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import FormInputComponent from '../../components/FormInput/FormInput';

export default {
  title: 'Form Elements',
  decorators: [ withKnobs ]
};

export const FormInput = () => ({
  components: { FormInputComponent },
  props: {
    labelText: {
      default: text('Label Text', 'Input Field')
    },
    fieldType: {
      default: select('Element Type', ['input', 'textarea'])
    }
  },
  template: `
  <form-input-component
    :field-type="fieldType"
    :label="labelText"
    is-required />
    `
});