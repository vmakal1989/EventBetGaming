<template>
  <div class="not-found">
    <div class="not-found__image"/>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
}
</script>

<style lang="scss" scoped>
  .not-found {
    width: 1100px;
    height: 900px;
    margin: 0 auto;

    &__image {
      width: 100%;
      height: 100%;
      background: url(~@/assets/images/404.png) center no-repeat;
    }
  }
</style>
