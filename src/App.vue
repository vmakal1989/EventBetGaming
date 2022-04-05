<template>
  <div id="app">
    <preloader />
    <router-view />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  created() {
    !this.isAuth &&	this.$router.push('/login')
  },
  computed: {
		...mapGetters(['isAuth']),
	},
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #181920;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
