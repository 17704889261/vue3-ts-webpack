<template>
  <el-drawer
    custom-class="setting-container"
    v-model="drawer"
    :append-to-body="true"
    title="全局设置"
    direction="rtl"
    :before-close="handleClose"
  >
    <!-- 主题区域 -->
    <el-divider content-position="center">切换主题</el-divider>
    <ChangeThemes />
  </el-drawer>
  <!-- 布局区域 -->
  <!-- asider设置区域 -->
  <!-- 动画设置区域 -->
</template>
<script setup lang="ts">
  import ChangeThemes from '@/components/ChangeThemes/index.vue'

  defineProps({
    drawer: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['changeStatus'])

  function handleClose() {
    emit('changeStatus', false)
  }
</script>
<style lang="scss">
  .setting-container .el-drawer__body {
    padding: 0 16px;
  }
</style>
