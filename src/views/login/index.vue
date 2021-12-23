<template>
  <div class="login-container">
    <el-card class="login-form">
      <h2 class="title">欢迎登录模版系统</h2>
      <el-form
        class="container"
        ref="formContainer"
        :model="form"
        label-position="left"
        label-width="60px"
      >
        <el-form-item class="item" label="用户名">
          <el-input v-model="form.user" type="text" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <el-form-item class="item" label="密码">
          <el-input v-model="form.password" type="password" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <el-form-item class="item" label="验证码">
          <el-input v-model="form.validateInfo" type="text" @keyup.enter="onSubmit"></el-input>
        </el-form-item>
        <div class="button-container">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  const router = useRouter()
  const store = useStore()

  const form = reactive({
    user: 'test',
    password: '',
    validateInfo: ''
  })

  async function onSubmit() {
    await store.dispatch('UserModel/login', form)
    router.push('/')
  }
</script>

<style lang="scss" scoped>
  .login-container {
    display: flex;
    height: 100%;
  }
  .login-form {
    margin: auto;
    width: 480px;
    height: 360px;

    .title {
      margin: 0 0 20px 0;
      text-align: center;
    }

    .container {
      display: flex;
      flex-direction: column;

      .item {
        margin-bottom: 48px;
      }

      .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
