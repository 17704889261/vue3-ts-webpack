<template>
  <!-- 左侧导航 -->
  <el-aside :width="asideWidth" class="aside-container">
    <div class="aside-logo">
      <img src="@/assets/logo.png" alt="" />
      <transition name="fade">
        <h1 v-show="!isCollapse">Vue3 TS Webpack</h1>
      </transition>
    </div>

    <Menu :isCollapse="isCollapse" />

    <div class="aside-collapse-active" @click="isCollapse = !isCollapse">
      <span>{{ isCollapse ? '展开' : '收起' }}</span>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Menu from './Menu.vue'

  const isCollapse = ref(false)

  const asideWidth = computed(() => {
    return isCollapse.value ? '48px' : '200px'
  })
</script>

<style lang="scss" scoped>
  /* 菜单主体内容 */
  .aside-container {
    background-color: var(--aside-background-color);
    height: 100%;
    transition: width 0.5s;

    /* 顶部logo */
    .aside-logo {
      height: 48px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;

      img {
        width: 25px;
        margin-right: 8px;
      }

      h1 {
        margin: 0;
        font-size: 12px;
        color: #fff;
      }
    }

    /* 底部菜单 */
    .aside-collapse-active {
      color: #fff;
      height: 48px;
      line-height: 48px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
  }

  /* menu区域 */
  .aside-container .aside-scrollbar {
    height: 100%;

    &.aside-logo-active {
      height: calc(100% - 48px - 48px);
    }

    :deep(.el-scrollbar__bar.is-horizontal) {
      display: none;
    }
  }
</style>

<style lang="scss">
  /* menu区域 */
  .aside-container .el-menu {
    border: none;
    --el-menu-background-color: var(--aside-background-color);

    .el-menu-item,
    .el-submenu__title {
      padding-left: 16px !important;
    }

    .el-submenu .el-menu-item {
      padding-left: 36px !important;
    }

    img {
      width: 16px;
      margin-right: 8px;
      transition: width 10.5s;
    }
  }
  /* 浮窗状态下的菜单 */
  .aside-menu-poper {
    left: 48px !important;
  }
  .aside-menu-poper,
  .aside-menu-poper .el-menu {
    background: var(--aside-background-color) !important;
  }
</style>
