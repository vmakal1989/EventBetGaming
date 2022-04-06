<template>
  <button class="btn" @click.stop="$emit('click', $event)">
		<slot />
	</button>
</template>

<script>

const Button = {
  name: 'Button'
}

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button

</script>

<style lang="scss" scoped>
  .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 50px;
      border: none;     
      border-radius: 25px;     
      cursor: pointer;
      transition: all .4s;
      font-size: 16px;    
      line-height: 1.2;
      text-transform: uppercase;

      &:focus {
        transform: scale(.98);
      }
    }
</style>
