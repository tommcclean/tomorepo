import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import SquareButtonComponent from '../../components/SquareButton/Index';

export default {
  title: 'Form Elements',
  decorators: [ withKnobs, withA11y ]
};

export const SquareButton = () => ({
  components: { SquareButtonComponent },
  props: {
    buttonText: {
      default: text('Button Text', 'Square Button')
    },
    buttonType: {
      default: select('Button Type', ['button', 'submit'])
    },
    isPrimary: {
      default: boolean('Is Primary', false)
    }
  },
  template: `
    <square-button-component
      :text="buttonText"
      :type="buttonType"
      :is-primary="isPrimary" />
    `
});