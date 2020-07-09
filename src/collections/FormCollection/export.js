import Vue from 'vue';
import FormInput from '../../components/FormInput/FormInput';	
import SquareButton from '../../components/SquareButton/SquareButton';	

const components = [
  FormInput,
  SquareButton
]

Vue.component('FormInput', FormInput);
Vue.component('SquareButton', SquareButton);

export default components; 