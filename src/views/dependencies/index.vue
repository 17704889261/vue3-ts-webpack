<template>
  <el-descriptions class="dependencies-container" title="生产依赖">
    <el-descriptions-item v-for="(val, key, index) in dependencies" :key="index" :label="key">
      {{ val }}
    </el-descriptions-item>
  </el-descriptions>
  <el-descriptions class="dev-dependencies-container" title="开发依赖">
    <el-descriptions-item v-for="(val, key, index) in devDependencies" :key="index" :label="key">
      {{ val }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
  // eslint-disable-next-line no-undef
  const packages = APP_PKG.pkg

  console.log(' packages =======> ', packages)

  const { dependencies, devDependencies } = packages
</script>

<style lang="scss" scoped>
  .dependencies-container {
    margin-bottom: 16px;
  }
  .dependencies-container :deep(.el-descriptions__body),
  .dev-dependencies-container :deep(.el-descriptions__body) {
    padding: 16px;
  }
</style>
