import Vue from 'vue';
import Overlay from './Overlay.vue';

const components = {
    Overlay
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;