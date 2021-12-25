<template>
  <div class="about">
    <h1>
      测试axios
      <el-button :loading="loading" @click="getClickFunc">axios接口</el-button>
      <el-button :loading="loading" @click="getClickFunc2">request接口2</el-button>
    </h1>
    <Nprogress :type="type"></Nprogress>
    <el-table
      ref="multipleTable"
      stripe
      :max-height="600"
      :data="list"
      v-loading="loading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        fixed="left"
        width="55"
        header-align="center"
        align="center"
      />
      <el-table-column type="index" width="50" header-align="center" align="center" />

      <el-table-column label="ID" property="id" width="240" header-align="center" align="center" />
      <el-table-column label="姓名" header-align="center" align="center" show-overflow-tooltip>
        <template #default="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="年龄" property="age" header-align="center" align="center" />
      <el-table-column label="性别" header-align="center" align="center">
        <template #default="scope">
          <span v-if="scope.row.sex">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column label="性别1-拓展" header-align="center" align="center">
        <template #default="scope"> {{ scope.row.sex1 }}-test </template>
      </el-table-column>
    </el-table>
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

  // 点击每一列选择框触发的方法
  const handleSelectionChange = (ele: any) => {
    console.log(' 当前选中的元素内容是： ele =====> ', ele)
  }

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
