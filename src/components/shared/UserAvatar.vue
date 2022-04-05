<template>
  <img :src="link" alt="Avatar" :class="`user-avatar ${className}`">
</template>

<script>

import defaultAvatar from '@/assets/images/default_avatar.png'

const UserAvatar = {
  name: 'UserAvatar',
  props: {
    src: {
      required: false
    },
    className: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      link: ''
    }
  },
  mounted() {
    this.link = this.src ? this.src : defaultAvatar
  },
}

UserAvatar.install = (Vue) => {
  Vue.component(UserAvatar.name, UserAvatar)
}

export default UserAvatar

</script>

<style lang="scss" scoped>
  .user-avatar {
    vertical-align: middle;
    transition: opacity 240ms ease-out;
		position: relative;
		border-radius: 50%;
		object-fit: contain;
  }
</style>
