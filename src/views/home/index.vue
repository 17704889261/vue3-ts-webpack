<template>
  <div class="home">
    <h3>切换主题</h3>
    <ChangeThemes />
    <h3>{{ msg }}</h3>
    <el-input v-model="msg"></el-input>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="msg2" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import HelloWorld from '@/views/home/components/HelloWorld.vue' // @ is an alias to /src
  import ChangeThemes from './components/change-themes/index.vue'

  const msg = ref('【 vue3.0 】这是一个测试信息')
  const msg2 = computed(() => {
    return `Welcome to Your Vue.js + TypeScript App ${msg.value}`
  })
</script>
