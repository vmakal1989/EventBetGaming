<template>
  <figure class="figure">
    <p><img src="images/thumb1.jpg" alt="game-image" /></p>
    <figcaption class="figcaption">
      Софийский собор
    </figcaption>
  </figure>
</template>

<script>

const GameCard = {
  name: 'GameCard', 
  props: {
    link: {
      type: String,
    },
    description: {
      type: String
    }
  }
}

GameCard.install = (Vue) => {
  Vue.component(GameCard.name, GameCard)
}

export default GameCard

</script>

<style lang="scss" scoped>
  .figure {
    width: 280px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 5px 5px .9em #15171c, -5px -5px .9em #2a303b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #272a35;
    margin: 0;

    .figcaption {
      color: #fff;
      font-size: 18px;
      padding: 20px;
    }
  }
</style>
