<template>
  <!-- 左侧导航 -->
  <el-aside :width="asideWidth" class="aside-container">
    <router-link to="/" class="aside-logo">
      <img src="@/assets/logo.png" alt="" />
      <transition name="fade">
        <h1 v-show="!isCollapse">Vue3 TS Webpack</h1>
      </transition>
    </router-link>

    <Menu :isCollapse="isCollapse" />

    <div class="aside-collapse-active" @click="isCollapse = !isCollapse">
      <span>{{ isCollapse ? '展开' : '收起' }}</span>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useCollapse } from '../utils/useSetting'
  import Menu from './Menu.vue'

  const isCollapse = useCollapse()

  const asideWidth = computed(() => {
    return isCollapse.value ? '48px' : '200px'
  })
</script>

<style lang="scss" scoped>
  /* 菜单主体内容 */
  .aside-container {
    background-color: var(--layout-base-color);
    height: 100%;
    transition: width 0.3s;

    /* 顶部logo */
    .aside-logo {
      height: var(--layout-base-height);
      padding: 0 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      text-decoration: none;

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
      height: var(--layout-base-height);
      line-height: var(--layout-base-height);
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>
