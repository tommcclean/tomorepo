import HelloWorld from './HelloWorld';

export default {
  title: 'Test',
  component: HelloWorld,
};

export const Text = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Welcome to Your Vue.js App"/>'
});
