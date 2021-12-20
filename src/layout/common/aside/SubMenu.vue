<template>
  <el-submenu :index="index" popper-class="aside-menu-poper" :class="{ isCollapse: isCollapse }">
    <template #title>
      <img src="@/assets/logo.png" alt="" />
      <span>{{ item.name }}</span>
    </template>
    <template v-for="(ktem, kndex) in item.children" :key="`${index}-${kndex}`">
      <SubMenu
        v-if="ktem.children && ktem.children.length > 0"
        :item="ktem"
        :index="`${index}-${kndex}`"
        :isCollapse="isCollapse"
      />
      <MenuItem v-else :index="`${index}-${kndex}`" :item="ktem" />
    </template>
  </el-submenu>
</template>

<script setup lang="ts">
  import MenuItem from './MenuItem.vue'

  const props = defineProps({
    isCollapse: {
      type: Boolean,
      default: false,
      required: true
    },
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
