import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y';

import ActivityComponent from '../../../components/typhoeOS/Activity/Activity';

export default {
  title: 'typhoeOS',
  decorators: [ withKnobs, withA11y ]
};

export const Activity = () => ({
  components: { ActivityComponent },
  props: {
    activityUrl: {
      default: text('Activity URL', 'https://www.tommcclean.me')
    },
    activityTitle: {
      default: text('Activity Title', 'Thomas William McClean')
    },
  },
  template: `
    <Activity-Component
      :activity-url="activityUrl"
      :activity-title="activityTitle" />
  `
});