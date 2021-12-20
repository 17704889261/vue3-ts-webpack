<template>
  <!-- 顶部导航 -->
  <el-header class="header-container">
    <!-- 左侧导航按钮区域 -->
    <div class="aside-collapse-active" @click="isCollapse = !isCollapse">
      <span>{{ isCollapse ? '展开' : '收起' }}</span>
    </div>
    <!-- 头像区域 -->
    <div class="user-container">
      <img class="user-img" src="@/assets/logo.png" />
      <div class="user-name">Hello {{ name }}</div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isCollapse = ref(false)
  const name = ref('Sam')
</script>

<style lang="scss" scoped>
  .header-container {
    --el-header-padding: 0 16px;
    --el-header-height: var(--layout-base-height);
    line-height: var(--el-header-height);
    color: var(--layout-base-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 侧导航 展开/收起 按钮 */
    .aside-collapse-active {
      display: inline-block;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }

    .user-img {
      margin-right: 8px;
      width: 32px;
    }
  }

  .user-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;

    &:hover {
      background-color: #f6f6f6;
    }

    .user-img {
      margin-left: 8px;
      width: 32px;
      height: 32px;
    }
  }
</style>
<style lang="scss"></style>
