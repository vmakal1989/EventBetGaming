<template>
  <div class="login">
    <form class="login-form">
      <span class="login-form__title">
        Login
      </span>
      <Input
          name="login"
          type="text"
          class="login-form__field"
          :required="true"
          placeholder="login"
          v-model="login"
      />
      <Input 
        name="login"
        class="login-form__field"
        type="password" 
        :required="true" 
        placeholder="password" 
        v-model="password" 
      />
      <Button 
        class="btn-success btn-login"
      >
        login
      </Button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
  },
  data() {
		return {
			login: '',
			password: '',
		}
	},
  created() {
    this.isAuth &&	this.$router.push('/')
  },
  computed: {
		...mapGetters(['isAuth']),
	},
}
</script>

<style lang="scss" scoped>
  .login {
    max-width: 410px;
    margin: 85px auto;
    padding: 20px 10px;

    &-form {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 39px;
        font-weight: bold;
        color: #fff;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 70px;
      }

      &__field {
        margin-bottom: 35px;
        outline: none;
        border: none;
        border-bottom: 2px solid #d9d9d9;
        font-size: 20px;
        color: #fff;
        line-height: 1.2;
        width: 100%;
        height: 52px;
        background: transparent;
        padding: 0 5px;
        box-sizing: border-box;

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus {
          border-bottom: 2px solid #d9d9d9;
          -webkit-text-fill-color: #fff;
          -webkit-box-shadow: 0 0 0px 1000px #181920 inset;
          transition: background-color 5000s ease-in-out 0s;
        }

        &::placeholder {
          color: #555555;
        }

        &:focus {
          border-color: #57b846;
        }
      }
    }

    .btn {
      &-success {
        color: #fff;
        background-color: #57b846;
        box-shadow: 0 10px 30px 0 rgb(87 184 70 / 50%);
        
        &:hover {
          background-color: #489a3a;
          box-shadow: 0 10px 30px 0 rgb(72 254 58 / 50%);
        }
      }
    }
  }
</style>
