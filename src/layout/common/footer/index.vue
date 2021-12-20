<template>
  <!-- 顶部导航 -->
  <el-footer class="footer-container"> footer </el-footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .footer-container {
    --el-footer-padding: 0 16px;
    --el-footer-height: var(--layout-base-height);
    line-height: var(--el-footer-height);
    color: var(--layout-base-color);
  }
</style>
