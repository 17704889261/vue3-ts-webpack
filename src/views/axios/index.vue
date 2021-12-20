<template>
  <div class="about">
    <h1>
      测试axios
      <el-button :loading="loading" @click="getClickFunc">axios接口</el-button>
      <el-button :loading="loading" @click="getClickFunc2">request接口2</el-button>
    </h1>
    <Nprogress :type="type"></Nprogress>
    <ul class="list" v-loading="loading">
      <li v-for="(item, index) of list" :key="item.id">
        <span style="margin-right: 16px">{{ index }}</span>
        <span style="margin-right: 16px">{{ item.id }}</span>
        <span style="margin-right: 16px">{{ item.name }}</span>
        <span style="margin-right: 16px">{{ item.age }}</span>
        <span style="margin-right: 16px">{{ item.sex }}</span>
        <span style="margin-right: 16px">{{ item.sex1 }} - test </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, getCurrentInstance } from 'vue'
  import { debounce } from '@/utils/tool'
  // 引入接口 返回值的接口定义
  import type { Test1Res } from '@/apis/demo'
  // 引入接口
  import { Demo1Fun, Demo2Fun } from '@/apis/demo'

  import Nprogress from '@/components/Nprogress/index.vue'

  // 获取vue上下文，等同于之前的this
  const appContext: any = getCurrentInstance()?.appContext

  // 定义页面中使用的响应式数据
  const list = ref<Test1Res[]>([])
  const loading = ref(false)
  const type = ref('success')

  // 点击按钮触发的方法-loading / 防抖
  const getClickFunc = () => {
    loading.value = true
    debounce(getDemo1, 200, false)
  }
  // 点击按钮触发的方法-loading / 防抖
  const getClickFunc2 = () => {
    loading.value = true
    debounce(getDemo2, 200, false)
  }

  // 实际获取接口的数据的方法
  const getDemo1 = () => {
    type.value = 'warning'
    setTimeout(async () => {
      try {
        const { code, data } = await Demo1Fun()
        if (code !== 1000) {
          type.value = 'error'
        } else {
          type.value = 'success'
          list.value = data.testInfo
        }
        loading.value = false
      } catch (error) {
        type.value = 'error'
        loading.value = false
      }
    }, 200)
  }

  const getDemo2 = () => {
    type.value = 'warning'
    setTimeout(async () => {
      const { res, data, msg } = await Demo2Fun()
      if (res) {
        type.value = 'success'
        list.value = data.testInfo
      } else {
        type.value = 'error'
        appContext.config.globalProperties.$message.error(msg)
      }
      loading.value = false
    }, 200)
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
