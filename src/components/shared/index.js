import Input from './Input.vue'
import Button from './Button.vue'


const components = [
	Input,
	Button
];

const install = function (Vue, options) {
	components.map(component => {
		Vue.use(component, options)
	});
};

export default {
	install
};