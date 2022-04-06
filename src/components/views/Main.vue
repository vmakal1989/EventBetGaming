<template>
  <main class="main">
    <div class="main__game-list">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :attributes="game.attributes"
        :id="game.id"
        @click="playDemo"
      />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Main',
  created() {
    this.gamesRequest()
  },
  computed: {
    ...mapGetters(['games'])
  },
  methods: {
    ...mapActions(['gamesRequest', 'playDemo'])
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    padding: 25px 0 25px 20px;

    &__game-list {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
