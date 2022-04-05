<template>
  <div class="preloader-box" v-if="loading">
	<span class="preloader" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const Preloader = {
  name: 'Preloader',
  computed: mapGetters(['loading']),
}

Preloader.install = (Vue) => {
  Vue.component(Preloader.name, Preloader)
}

export default Preloader

</script>

<style lang="scss" scoped>
  .preloader-box {
	position: fixed;
	background: rgba(#000, .6);
	z-index: 9;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
  }

  .preloader {
	content: url(~@/assets/images/preloader.svg);
	display: block;
	width: 75px;
	height: 75px;
  }
</style>

