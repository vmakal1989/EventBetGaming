<template>
  <main class="main">
    <div class="main__game-list">
      <GameCard />
    </div>
  </main>
</template>

<script>

export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    padding: 25px 20px;

    &__game-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
