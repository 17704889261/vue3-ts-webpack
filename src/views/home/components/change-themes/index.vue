<template>
  <el-color-picker v-model="themes" @change="changeThemes" />
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Themes } from '@/plugins/themes'

  const themes = ref('green')
  const themesInstance = new Themes()

  const changeThemes = () => {
    themesInstance.setCurrentTheme(themes.value)
  }

  onMounted(() => {
    themes.value = themesInstance.getCurrentTheme()
  })
</script>
<style lang="scss" scoped></style>
