import Vue from 'vue';
import FormInput from '../../components/FormInput/Index';
import FormSelect from '../../components/FormSelect/Index';
import SquareButton from '../../components/SquareButton/Index';

const components = [
  FormInput,
  FormSelect,
  SquareButton
]

Vue.component('FormInput', FormInput);
Vue.component('FormSelect', FormSelect);
Vue.component('SquareButton', SquareButton);

export default components; 