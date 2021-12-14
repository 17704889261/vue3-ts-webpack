<template>
  <el-container class="app-container">
    <!-- 左侧导航 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 右侧主体 -->
    <el-container>
      <!-- 顶部header -->
      <el-header>Header</el-header>
      <!-- 核心内容区 -->
      <el-main>
        Main
        <router-view></router-view>
      </el-main>
      <!-- 底部footer -->
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .app-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
  }
</style>
