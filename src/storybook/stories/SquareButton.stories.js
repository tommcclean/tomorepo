import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import SquareButtonComponent from '../../components/SquareButton/SquareButton';

export default {
  title: 'Components',
  decorators: [ withKnobs ]
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