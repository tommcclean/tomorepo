import Vue from 'vue';
import EditableElement from './EditableElement.vue';

const components = {
    EditableElement
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;