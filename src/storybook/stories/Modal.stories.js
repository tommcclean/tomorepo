import { withA11y } from '@storybook/addon-a11y';

import ModalComponent from '../../components/Modal/Modal';
import SquareButtonComponent from '../../components/SquareButton/SquareButton'
export default {
  title: 'Utilities',
  decorators: [ withA11y ]
};

export const Modal = () => ({
  components: { ModalComponent, SquareButtonComponent },
  template: `
  <ModalComponent>
    <template v-slot:header>
      My First Modal
    </template>
    <template v-slot:body>
      <p>This is the body slot for the component</p>
      <p>The component has a slot for the Header, Body and the Footer</p>
    </template>
    <template v-slot:footer>
      <SquareButtonComponent text="Cancel" />
      <SquareButtonComponent is-primary />
    </template>
  </ModalComponent>
  `
});