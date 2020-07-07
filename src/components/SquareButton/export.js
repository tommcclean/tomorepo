import Vue from 'vue';
import SquareButton from './SquareButton.vue';

const components = {
    SquareButton
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;