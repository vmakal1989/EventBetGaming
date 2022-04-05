import Input from './Input.vue'
import Button from './Button.vue'
import UserAvatar from './UserAvatar.vue'
import GameCard from './GameCard.vue'
import Preloader from './Preloader.vue'

const components = [
	Input,
	Button,
	UserAvatar,
	GameCard,
	Preloader,
];

const install = function (Vue, options) {
	components.map(component => {
		Vue.use(component, options)
	});
};

export default {
	install
};