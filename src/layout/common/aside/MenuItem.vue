<template>
  <!-- 单个子菜单 -->
  <el-menu-item :index="index" :route="item.path">
    <img src="@/assets/logo.png" alt="" />
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
  const props = defineProps({
    item: {
      type: Object,
      required: true
    },
    index: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped></style>
