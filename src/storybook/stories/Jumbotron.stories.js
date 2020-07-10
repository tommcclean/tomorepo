import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import JumbotronComponent from '../../components/Jumbotron/Index';

export default {
  title: 'Layout',
  decorators: [ withKnobs, withA11y ]
};

export const Jumbotron = () => ({
  components: { JumbotronComponent },
  props: {
    imageUrl: {
      default: text('Image Url', 'https://www.tommcclean.me/media/articles-background.jpg')
    },
    isTaller: {
      default: boolean('Make Taller', false)
    }
  },
  template: `
    <Jumbotron-component
      :image-url="imageUrl"
      :is-taller="isTaller">
      <h1>Hero Component</h1>
      <p>All of this content is injected via a slot</p>
    </Jumbotron-component>
  `
});