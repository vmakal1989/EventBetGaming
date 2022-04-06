<template>
  <aside class="aside">
    <section class="aside__container">
      <UserAvatar className="aside__user-avatar"/>
      <div class="aside__user-balance-list">
        <div class="aside__user-total-balance">
          <span class="-text">
            Total balace
          </span>
          <span class="-amount">
            {{balance}}
          </span>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Aside',
  computed: {
    ...mapGetters(['balance'])
  }
}
</script>

<style lang="scss" scoped>
  .aside {
    width: 320px;
    padding: 20px;
    background-color: #1c1e27;
    height: 100vh;

    &__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-shadow: 10px 10px .5em #15171c, -10px -10px .5em #2a303b;
      border-radius: 10px;
      background-color: #1f222c;
      padding: 10px 3px;
    }

    &__user-balance-list {
      border-radius: 20px;
      box-shadow: inset -10px -10px .5em #2a303b, inset 10px 10px .5em #15171c;
      background-color: #1f222c;
      padding: 15px 20px;
    }

    &__user-avatar {
      width: 100px;
      height: 100px;
      margin: 10px auto;
      padding: 10px;
      box-shadow: inset -10px -10px .5em #2a303b, inset 10px 10px .5em #15171c;
    }

    &__user-total-balance {
      display: flex;
      flex-direction: column;

      .-text {
        color: #bbc0c2;
        font-size: 20px;
        text-align: center;
      }

      .-amount {
        color: #fff;
        font-size: 24px;
        text-align: center;
      }
    }
  }
</style>
