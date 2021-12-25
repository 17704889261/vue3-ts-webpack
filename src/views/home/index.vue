<template>
  <div class="home">
    <h3>切换主题</h3>
    <ChangeThemes />
    <h3>{{ msg }}</h3>
    <el-input v-model="msg"></el-input>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ChangeThemes from './components/change-themes/index.vue'

  const msg = ref('【 vue3.0 】这是一个测试信息')
</script>
