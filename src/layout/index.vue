<template>
  <el-container class="app-container">
    <!-- 左侧导航 -->
    <AsideMenu />
    <!-- 右侧主体 -->
    <el-container>
      <!-- 顶部header -->
      <el-header>Header</el-header>
      <!-- 核心内容区 -->
      <el-main>
        Main
        <router-view v-slot="{ Component }">
          <transition :name="viewTransition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
      <!-- 底部footer -->
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import AsideMenu from './common/aside/index.vue'

  const rt = computed(() => {
    return useRoute().meta.transition as string
  })
  const viewTransition = rt.value || 'slide-fade'
</script>

<style lang="scss" scoped>
  .app-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
  }
</style>
