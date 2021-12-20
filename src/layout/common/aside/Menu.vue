<template>
  <!-- 左侧导航 -->
  <el-scrollbar class="aside-scrollbar aside-logo-active" :always="true">
    <el-menu
      class="aside-menu"
      text-color="#fff"
      :default-active="defaultIndex"
      :router="true"
      :collapse="isCollapse"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in menus" :key="`${item.name}-${index}`">
        <SubMenu
          v-if="item.children && item.children.length > 0"
          :item="item"
          :index="`${String(item.name)}-${index}`"
          :isCollapse="isCollapse"
        />
        <MenuItem v-else :index="`${String(item.name)}-${index}`" :item="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { getMenus } from '@/router/menu'
  import SubMenu from './SubMenu.vue'
  import MenuItem from './MenuItem.vue'

  const defaultIndex = ref('Index-0')
  const menus = getMenus()
  const findIndexs = getIndex()
  defaultIndex.value = findIndexs

  const props = defineProps({
    isCollapse: {
      type: Boolean,
      default: false,
      required: true
    }
  })

  const handleSelect = (key: any, keyPath: string) => {
    console.log(key, keyPath)
  }
  const handleOpen = (key: any, keyPath: string) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: any, keyPath: string) => {
    console.log(key, keyPath)
  }

  // 获取默认 default-active 值
  function getIndex() {
    const { path } = useRoute()
    const findIndex = getIndexFun(menus, path, null, null)

    function getIndexFun(trees: any, paths: any, currIndex: any, parPath: any) {
      let fIndex = ''
      if (trees) {
        const tIndex = trees.findIndex((item: any) =>
          parPath ? `${parPath}/${item.path}` === paths : item.path === paths
        )
        if (tIndex > -1) {
          fIndex = currIndex ? `${currIndex}-${tIndex}` : `${trees[tIndex].name}-${tIndex}`
          return fIndex
        }
        trees.forEach((ele: any, index: number) => {
          const cuIndex = currIndex ? currIndex - index : `${trees[index].name}-${index}`
          fIndex += getIndexFun(
            ele.children,
            paths,
            cuIndex,
            parPath ? `${parPath}/${ele.path}` : ele.path
          )
        })
      }

      return fIndex
    }
    return findIndex
  }
</script>

<style lang="scss" scoped>
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
    --el-menu-background-color: var(--layout-base-color);

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
  /* 在 body中插入 浮窗状态下的菜单 */
  .aside-menu-poper {
    left: var(--layout-base-height) !important;
  }
  .aside-menu-poper,
  .aside-menu-poper .el-menu {
    background: var(--layout-base-color) !important;

    img {
      width: 16px;
      margin-right: 8px;
      transition: width 10.5s;
    }
  }
</style>
