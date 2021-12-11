<template>
  <el-alert
    class="n-progress-container"
    :title="titleInfo"
    :type="type"
    :effect="options.effect"
    :closable="options.closable"
  >
  </el-alert>
</template>
<script setup lang="ts">
  import { computed, reactive } from 'vue'
  import useAlertMessage from './uses/alertMessage'

  const options = reactive({
    effect: 'dark',
    closable: false
  })

  const props = defineProps({
    type: {
      default: 'warning',
      type: String
    }
  })

  const typeEnum = computed(() => {
    return props.type
  })

  const titleInfo = useAlertMessage(typeEnum)
</script>
<style lang="scss" scoped>
  .n-progress-container {
    position: relative;
    margin: 16px auto;
    width: 500px;
    height: 32px;
    text-align: center;

    :deep(.el-alert__content) {
      margin: 0 auto;
      --el-alert-title-font-size: 18px;
      font-weight: bolder;
    }
  }
</style>
