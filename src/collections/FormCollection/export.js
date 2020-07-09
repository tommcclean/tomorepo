import Vue from 'vue';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import SquareButton from '../../components/SquareButton/SquareButton';

const components = [
  FormInput,
  FormSelect,
  SquareButton
]

Vue.component('FormInput', FormInput);
Vue.component('FormSelect', FormSelect);
Vue.component('SquareButton', SquareButton);

export default components; 