<template>
  <div class="about">
    <h1>测试axios <el-button :loading="loading" @click="getClickFunc">接口</el-button></h1>
    <Nprogress :type="type"></Nprogress>
    <ul class="list" v-loading="loading">
      <li v-for="(item, index) of list" :key="item.id">
        <span style="margin-right: 16px">{{ index }}</span>
        <span style="margin-right: 16px">{{ item.id }}</span>
        <span style="margin-right: 16px">{{ item.name }}</span>
        <span style="margin-right: 16px">{{ item.age }}</span>
        <span style="margin-right: 16px">{{ item.sex }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { debounce } from '@/utils/tool'
  // 引入接口 返回值的接口定义
  import type { Test1Res } from '@/apis/demo'
  // 引入接口
  import { Demo1Fun } from '@/apis/demo'

  import Nprogress from '@/components/Nprogress/index.vue'

  // 定义页面中使用的响应式数据
  const list = ref<Test1Res[]>([])
  const loading = ref(false)
  const type = ref('success')

  // 点击按钮触发的方法-loading / 防抖
  const getClickFunc = () => {
    loading.value = true
    debounce(getDemo1, 200, false)
  }

  // 实际获取接口的数据的方法
  const getDemo1 = () => {
    try {
      type.value = 'warning'
      setTimeout(async () => {
        const res = await Demo1Fun()
        const { code, data } = res
        if (code !== 1000) {
          type.value = 'error'
        } else {
          type.value = 'success'
          list.value = data.testInfo
        }
        loading.value = false
      }, 1000)
    } catch (error) {
      type.value = 'error'
      loading.value = false
    }
  }

  // mounted 页面加载时执行的钩子函数
  onMounted(() => {
    getClickFunc()
  })
</script>

<style lang="scss" scoped>
  .list {
    min-height: 300px;
  }
</style>
