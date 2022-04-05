<template>
  <div class="layout">
    <Aside />
    <Main />
  </div>
</template>

<script>

import Main from './Main.vue'
import Aside from './Aside.vue'

export default {
  name: 'Layout',
  components: {
    Main,
    Aside,
  },
}
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
  }
</style>
