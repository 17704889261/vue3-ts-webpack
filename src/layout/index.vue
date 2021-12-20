<template>
  <el-container class="app-container">
    <!-- 左侧导航 -->
    <LayoutAside />
    <!-- 右侧主体 -->
    <el-container class="main-container">
      <!-- 顶部header -->
      <LayoutHeader />
      <!-- 核心内容区 -->
      <el-main>
        <router-view v-slot="{ Component }">
          <transition :name="viewTransition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
      <!-- 底部footer -->
      <LayoutFooter v-if="footerActive" />
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  import LayoutAside from './common/aside/index.vue'
  import LayoutHeader from './common/header/index.vue'
  import LayoutFooter from './common/footer/index.vue'

  const rt = computed(() => {
    return useRoute().meta.transition as string
  })
  const footerActive = ref(false)
  const viewTransition = rt.value || 'slide-fade'
</script>

<style lang="scss" scoped>
  .app-container {
    height: 100%;
  }

  .main-container {
    flex-direction: column;
  }

  .el-main {
    --el-main-padding: 16px;
    background-color: var(--layout-base-backgroud-color);
    color: var(--layout-base-color);
  }
</style>
