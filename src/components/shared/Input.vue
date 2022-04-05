<template>
  <input
    v-bind="$attrs" 
    v-bind:value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>

const Input = {
  name: 'Input', 
  inheritAttrs: false,
  showPassword: true,
  props: ['value']
}

Input.install = (Vue) => {
  Vue.component(Input.name, Input)
}

export default Input

</script>
