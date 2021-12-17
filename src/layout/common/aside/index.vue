<template>
  <!-- 左侧导航 -->
  <el-aside :width="asideWidth" class="aside-container">
    <div class="aside-logo">
      <img src="@/assets/logo.png" alt="" />
      <transition name="fade">
        <h1 v-show="!isCollapse">Vue3 TS Webpack</h1>
      </transition>
    </div>
    <el-scrollbar class="aside-scrollbar aside-logo-active" :always="true">
      <el-menu
        class="aside-menu"
        text-color="#fff"
        default-active="Index-0"
        :router="true"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item, index) in menus" :key="`${item.name}-${index}`">
          <el-submenu
            v-if="item.children.length > 0"
            :index="`${String(item.name)}-${index}`"
            popper-class="aside-menu-poper"
            :class="{ isCollapse: isCollapse }"
          >
            <template #title>
              <img src="@/assets/logo.png" alt="" />
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(ktem, kndex) in item.children"
              :key="`${String(ktem.name)}-${kndex}`"
              :index="`${String(ktem.name)}-${index}-${kndex}`"
              :route="`${item.path}/${ktem.path}`"
            >
              {{ ktem.name }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="`${String(item.name)}-${index}`" :route="item.path">
            <img src="@/assets/logo.png" alt="" />
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
    <div class="aside-collapse-active" @click="isCollapse = !isCollapse">
      <span>{{ isCollapse ? '展开' : '收起' }}</span>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { getMenus } from '@/router/menu'

  const menus = getMenus()

  const isCollapse = ref(false)

  const asideWidth = computed(() => {
    return isCollapse.value ? '48px' : '200px'
  })

  const handleOpen = (key: any, keyPath: string) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: any, keyPath: string) => {
    console.log(key, keyPath)
  }
</script>

<style lang="scss" scoped>
  /* 动画效果 start */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  /* 动画效果 end */

  .aside-container {
    background-color: var(--aside-background-color);
    height: 100%;
    transition: width 0.5s;

    .aside-logo {
      height: 48px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
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

    .aside-collapse-active {
      color: #fff;
      height: 48px;
      line-height: 48px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }

    .aside-scrollbar {
      height: 100%;

      &.aside-logo-active {
        height: calc(100% - 48px - 48px);
      }

      :deep(.el-scrollbar__bar.is-horizontal) {
        display: none;
      }
    }

    :deep(.el-menu) {
      border: none;
      --el-menu-background-color: var(--aside-background-color);

      img {
        width: 16px;
        margin-right: 8px;
        transition: width 10.5s;
      }

      .isCollapse .el-submenu__title {
        padding: 0 10px !important;

        img {
          width: 20px;
          margin-right: 0px;
          transition: width 10.5s;
        }
      }
    }
  }
</style>

<style lang="scss">
  /* 浮窗状态下的菜单 */
  .aside-menu-poper {
    left: 48px !important;
  }
  .aside-menu-poper,
  .aside-menu-poper .el-menu {
    background: var(--aside-background-color) !important;
  }
</style>
