<template>
  <figure class="figure" @click.stop="$emit('click', id)">
    <img :src="attributes.image" alt="game-image" />
    <figcaption class="figcaption">
      {{ attributes.title }}
    </figcaption>
  </figure>
</template>

<script>

const GameCard = {
  name: 'GameCard', 
  props: {
    attributes: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
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
    width: 300px;
    border-radius: 20px;
    box-shadow: 5px 5px .9em #15171c, -5px -5px .9em #2a303b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #272a35;
    margin: 0;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: 20px;
    cursor: pointer;
    position: relative;

    img {
      object-fit: fill;
      width: 100%;
      max-height: 180px;
    }

    .figcaption {
      color: #fff;
      height: 100%;
      font-size: 18px;
      padding: 20px;
      display: flex;
      align-items: center;
    }

    &:hover {
      box-shadow: 5px 5px .9em #2a303b, -5px -5px .9em #15171c;
    }

    &:hover::after {
      content: 'Play demo';
      position: absolute;
      left: 0; top: 0; 
      z-index: 1;
      background: rgba(24, 25, 32, 0.5);
      color: #fff; 
      display: flex;
      justify-content: center;
      font-size: 16px;
      height: 100%;
      width: 100%;
      padding-top: 60px;
    }
  }
</style>
